import React from 'react'
import './Bannerkitfem.css';
import vector1 from "../../icons/vector1-home.svg"
import vector6 from "../../icons/vector6-home.png"

function Bannerkitfem() {
  return (
    <div>
        <div className='bannerkitfem'>
        <img src={vector1} className='vector-left-banner'/>
            <h2>!NO SOY LA MUSA
            SOY LA ARTISTA!</h2>
            <img src={vector6} className='vector-rigth-banner'/>
        </div>
    </div>
  )
}

export default Bannerkitfem