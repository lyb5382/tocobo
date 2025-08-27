import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Brand from './sections/Brand'
import Cta from './sections/Cta'
import Reviews from './sections/Reviews'
import Products from './sections/Products'
import TopBanner from './components/TopBanner'
import './styles/main.scss'
import { useState } from 'react'
function App() {
  const [topBn, setTopBn] = useState('')
  const upTopBn = () => {
    setTopBn('up')
  }
  return (
    <div className={`app-container ${topBn}`}>
      <TopBanner onClick={upTopBn} />
      <Header />
      <main>
        <section id='Hero' className='Section'>
          <Hero />
        </section>
        <section id='Brand' className='Section'>
          <Brand />
        </section>
        <section id='Products' className='"ection'>
          <Products />
        </section>
        <section id='Reviews' className='Section'>
          <Reviews />
        </section>
        <section id='Cta' className='Section'>
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App