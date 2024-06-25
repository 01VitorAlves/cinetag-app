import Banner from "components/Banner"
import styles from "./player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom"
import NaoEncontrada from "pages/NaoEncontrada"
import { useEffect, useState } from "react"

function Player() {

    const [video,setVideo] = useState()

    const parametros = useParams();

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/01VitorAlves/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => setVideo(...dados))
    },[])

    if(!video){
        return <NaoEncontrada/>
    }


    return (
        <>
        <Banner imagem={"player"}/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>

        <section className={styles.container}>

            <iframe 
                width="100%"
                height="100%"
                src={video.link}
                title={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>

        </section>
        
        </>
    )
}

export default Player