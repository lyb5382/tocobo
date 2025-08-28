import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'

const TopBtn = () => {
    const topbtn = useSmoothScroll()
    return (
        <div>
            <button className='top-btn' onClick={(e) => {
                e.preventDefault()
                topbtn('Hero')
            }}>△</button>
            <a href="#" className="tcb">TCB</a>
            <p>1:1 Talk</p>
        </div>
    )
}

export default TopBtn