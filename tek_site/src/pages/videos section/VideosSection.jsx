import React from 'react'
import './VideosSection.css'

const VideosSection = () => {
    const videos = [
        {
            title: "Introdução ao SDAV - Sistema Digital de Análise de Vibrações",
            description: "Neste vídeo falaremos sobre os passos iniciais da utilização e configuração do software SDAV",
            vdSrc: "https://www.youtube.com/embed/8TeiLIP5iMU?start=0&end=10&autoplay=1&mute=1&loop=1&playlist=8TeiLIP5iMU&controls=0&modestbranding=1&disablekb=1&rel=0",
        },
        {
            title: "Definir alarmes no sdav",
            description: "Neste vídeo mostraremos como definir Níveis de Alarme para os sinais medidos.",
            vdSrc: "https://www.youtube.com/embed/F_ERXz4M7Po?start=0&end=10&autoplay=1&mute=1&loop=1&playlist=F_ERXz4M7Po&controls=0&modestbranding=1&disablekb=1&rel=0",
        },
        {
            title: "Balanceamento em 1 plano",
            description: "Modo simples de executar um balanceamento em 1 plano utilizando o balanceador NK622",
            vdSrc: "https://www.youtube.com/embed/-YW2FQ9m9kg?start=0&end=10&autoplay=1&mute=1&loop=1&playlist=-YW2FQ9m9kg&controls=0&modestbranding=1&disablekb=1&rel=0",
        },
    ];
    
    
    
    

    return (
        <div className='videosBody'>
        <h1>Teknikao no YouTube</h1>
        <h2>videoaulas e demonstrações</h2>

        <main>
            <div className='main-content'>
                {videos.map((videos, index)=>(
                    <div className='videos-content' key={index}>
                         <div className='video-content'>
                            <iframe 
                                src={videos.vdSrc} 
                                title={videos.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h1>{videos.title}</h1>
                        <p>{videos.description}</p>
                    </div>
                ))}
            </div>
        </main>

        </div>
    )
}

export default VideosSection
