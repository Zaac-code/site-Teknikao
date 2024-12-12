import React from 'react'
import './Services.css'
import './ImageCards.css'

const Services = () => {
  return (
    <div className='service-content'>
      <h1>Produtos e serviços</h1>
      <h2>Conheça nossos produtos e serviços</h2>

      <div className='servicesCard'>
        <div className='cards'>
            <div className='imageCard'><img id='img1' src="src\assets\imagens site\sinusoid-graph-svgrepo-com.svg" alt="sinusoid image" /></div>
            <h1>Equipamentos para Ánalise de vibrações</h1>
        </div>

        <div className='cards'>
            <div className='imageCard'><img id='img2' src="src\assets\imagens site\balancing-between-cogwheel-and-businessman-svgrepo-com.svg" alt="" /></div>
            <h1>Equipamentos de Balanceamento</h1>
        </div>

        <div className='cards'>
            <div className='imageCard'><img id='img3' src="src\assets\imagens site\eye-svgrepo-com.svg" alt="" /></div>
            <h1>Equipamentos de Monitoramento</h1>
        </div>

        <div className='cards'>
            <div className='imageCard'><img id='img4' src="src\assets\imagens site\measure-svgrepo-com.svg" alt="" /></div>
            <h1> Equipamentos Medidores de Vibração</h1>
        </div>

        <div className='cards'>
            <div className='imageCard'><img id='img5' src="src\assets\imagens site\magnet-svgrepo-com.svg" alt="" /></div>
            <h1>Campo Magnético</h1>
        </div>
      </div>
    </div>
  )
}

export default Services
