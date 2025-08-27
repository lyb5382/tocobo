import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'

const TopBtn = () => {
    const topbtn = useSmoothScroll()
    return (
        <button className='top-btn' onClick={()=>topbtn('Hero')}>↑</button>
    )
}

export default TopBtn