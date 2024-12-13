import React from 'react'
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

const Carousel = () => {
  return (
    <div className='carouselBody'>
      <h1>Balanceadores</h1>
      <h2>Para mais equilibrio na sua vida</h2>
      <div className='Cards'>

        <Swiper pagination={{clickable:true}} modules={[Pagination, Navigation]} loop={true} navigation={true} className="mySwiper">
          
          <SwiperSlide>
            <div className='slidePage'>
              <div className='text-content'>
                <h1>NK621</h1>
                <p>Medidor e Balanceador dinâmico</p>
              </div>              
              <img className='imgSlide1' src="src\assets\imagens site\Equipamentos Teknikao\nk621.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slidePage'>
              <div className='text-content'>
                <h1>NK622</h1>
                <p>Coletor e Balanceador dinâmico</p>
              </div>              
              <img className='imgSlide2' src="src\assets\imagens site\Equipamentos Teknikao\nk622.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slidePage'>
              <div className='text-content'>
                <h1>NK700</h1>
                <p>Interface de balancemento</p>
              </div>
              <img className='imgSlide3' src="src\assets\imagens site\Equipamentos Teknikao\nk700.png" alt="" />
            </div>
          </SwiperSlide> 

        </Swiper>

      </div>
    </div>
  )
}



export default Carousel
