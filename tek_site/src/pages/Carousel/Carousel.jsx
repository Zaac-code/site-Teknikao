import React from 'react'
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

const Carousel = () => {

  const slides = [
    {
      title: "NK621",
      description: "Medidor e Balanceador dinâmico",
      imgSrc: "src/assets/imagens site/Equipamentos Teknikao/nk621.png",
      imgClass: "imgSlide1",
    },
    {
      title: "NK622",
      description: "Coletor e Balanceador dinâmico",
      imgSrc: "src/assets/imagens site/Equipamentos Teknikao/nk622.png",
      imgClass: "imgSlide2",
    },
    {
      title: "NK700",
      description: "Interface de balancemento",
      imgSrc: "src/assets/imagens site/Equipamentos Teknikao/nk700.png",
      imgClass: "imgSlide3",
    },
  ];
  

  return (
    <div className='carouselBody'>
      <h1>Balanceadores</h1>
      <h2>Para mais equilibrio <br /> na sua vida</h2>
      <main>
        <Swiper
          pagination={{clickable:true}}
          modules={[Pagination, Navigation]}
          loop={true} navigation={true}
          className="mySwiper"
        >
          {slides.map((slide, index)=>(
            <SwiperSlide key={index}>
              <div className='slidePage'>
                <div className='text-content'>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>              
                <img className={slide.imgClass} src={slide.imgSrc} alt={slide.title}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  )
}
export default Carousel
