import './App.css'
import BannerSection from './pages/Main Page/BannerSection'
import Header from './pages/Header/Header'
import Services from './pages/Services section/Services'
import Carousel from './pages/Carousel/Carousel'
import VideosSection from './pages/Videos section/VideosSection'
import AboutUs from './pages/About us/AboutUs'

function App() {

  return (
    <>
      <Header/>
      <BannerSection/>
      <Services/>
      <AboutUs/>
      <VideosSection/>
      <Carousel/>
      
    </>
  )
}

export default App
