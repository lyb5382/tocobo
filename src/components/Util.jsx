import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
  const utilData = headerData.utils
  return (
    <ul className='util-lst'>
      {utilData.map((i) => (<li key={i.id}>
        <a href={i.href}><img src={i.icon} alt={i.label} /></a>
      </li>))}
    </ul>
  )
}

export default Util