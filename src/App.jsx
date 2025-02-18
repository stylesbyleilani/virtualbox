import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeaturesSection/>
        <WorkFlow/>
        <Pricing/>
        <Testimonial/>
        <Footer/>
      </div>

      
    </div>
  )
}

export default App