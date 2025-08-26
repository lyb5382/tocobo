import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
  const utilData = headerData.utils
  return (
    <ul>
      {utilData.map((i) => (<li key={i.id}>
        <a href={i.href}>{i.icon} {i.label}</a>
      </li>))}
    </ul>
  )
}

export default Util