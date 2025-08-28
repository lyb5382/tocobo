import React from 'react'
import { helloData } from '../util/hello'
import '../styles/section/hello.scss'

const Hello = () => {
    return (
        <div className='inner'>
            <div className="img-wrap">
                <img src={helloData.media.src} alt="" />
            </div>
            <div className="t-wrap">
                <p className="txt-2">{helloData.eyebrow}</p>
                <h2 className="tit">{helloData.title}</h2>
                <p className="txt-1">{helloData.description}</p>
                <a href={helloData.cta.href} className="btn">{helloData.cta.label}</a>
            </div>
        </div>
    )
}

export default Hello