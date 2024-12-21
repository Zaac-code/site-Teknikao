import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='AboutUs-content'>
      <div className='main-container'>
        <h1>Quem somos</h1>
        <h2>Conheça a história da Teknikao</h2>
        <p>Há mais de 30 anos no mercado, a Teknikao é uma empresa 100% brasileira, que investe no desenvolvimento de equipamentos e softwares para medir e analisar a vibração de seu maquinário.</p>
        <p>Trabalhamos com os melhores equipamentos e softwares para a manutenção preditiva de suas máquinas.</p>
        <div className='geometry'>
          <ul>
            <li>Mais de três décadas no mercado</li>
            <li>Produtos com Tecnologia de Ponta</li>
            <li>Excelente custo-benefício</li>
            <li>Equipe de atendimento personalizado</li>
          </ul>

          <div className="button-container">
            <button>Saiba mais</button>
          </div>
        </div>
      </div>
      <div className='background-img'>
        <img src="src\assets\imagens site\background images\quem-somos.png" alt="" />
      </div>
    </div>
  )
}

export default AboutUs
