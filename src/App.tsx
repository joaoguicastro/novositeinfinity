import './App.css'
import FeaturedCourses from './components/FeaturedCourses'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Header logoSrc='../public/Logotipo-vertical-normal.png'/>
      <Hero heroImage= '../public/Logotipo-vertical-normal.png'/>
      <FeaturedCourses />
      <Stats />
      <Testimonials />
    </> 
  )
}

export default App
