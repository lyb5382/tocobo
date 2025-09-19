import React, { useEffect } from 'react'
import { helloData } from '../util/hello'
import "../styles/sections/hello.scss"
import Aos from 'aos'

const Hello = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500
    })
  }, [])
  return (
    <div className='inner hello-inner'>
      <div className="img-wrap" data-aos="fade-in">
        <img src={helloData.media.src} alt={helloData.media.alt} />
      </div>
      <div className="t-wrap" data-aos="fade-in" data-aos-delay="500">
        <p className="txt-2">{helloData.eyebrow}</p>
        <h2 className="tit"
          dangerouslySetInnerHTML={{ __html: helloData.title }}
        />
        <p className="txt-1"
          dangerouslySetInnerHTML={{ __html: helloData.description }}
        />
        <a href={helloData.href} className="btn">
          {helloData.cta.label}
        </a>
      </div>
    </div>
  )
}

export default Hello