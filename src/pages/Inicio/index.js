import Banner from "components/Banner"
import Cabecalho from "components/Cabecalho"
import Card from "components/Card"
import Rodape from "components/Rodape"
import Titulo from "components/Titulo"
import styles from "./inicio.module.css"
import { useEffect, useState } from "react"


function Inicio() {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/01VitorAlves/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados=> {
            setVideos(dados)
        })
    }, [] )

    return(
        <>
            
            <Banner imagem='home'/>
            <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>

            <section className={styles.container}>
                {videos.map((video) => { 
                   return <Card {...video} key={video.id}/>
                })}

            </section>

           
        
        </>
        
    )
    
}

export default Inicio