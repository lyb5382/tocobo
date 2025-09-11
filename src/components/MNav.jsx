import React from 'react'
import '../styles/components/mnav.scss'
import Util from './Util'
import { headerData } from '../util/header'

const MNav = ({ handleClick, handleNavC }) => {
    const navLink = headerData.menus
    return (
        <div className='m-nav-wrap'>
            <div className="m-top">
                <Util />
                <a className='m-close-btn' href="#" onClick={(e) => e.stopPropagation()}>
                    <img src="/img/icon_search_close.png" alt="icon" />
                </a>
            </div>
            <ul className="m-nav-list">
                {navLink.map((nav, i) => (
                    <li key={i}>
                        <a href={nav.href} onClick={(e) => handleClick(e, nav)}>{nav.label}</a>
                    </li>
                ))}
            </ul>
            <ul className="btn-lst">
                <li><a href="">로그인</a></li>
                <li><a href="">회원가입</a></li>
                <li><a href="">공지사항</a></li>
            </ul>
        </div>
    )
}

export default MNav
