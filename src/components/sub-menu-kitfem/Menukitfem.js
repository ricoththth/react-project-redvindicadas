import React from 'react'
import  {Link}  from 'react-router-dom';
import './Menukitfem.css';
import Arengas from "../../icons/kitfemnav4.png"
import Informate from "../../icons/kitfemnav3.png"
import Stickers from "../../icons/kitfemnav2.png"
import Posters from "../../icons/kitfemnav1.png"

function Menukitfem() {
  return (
    <div className='nav-space'>
        <div className='little-nav'>
        <div class="unit-nav-2">
			<Link to='/kitfem/Kitfem'>
             <img src={Posters} className="kitfemnav1"/>
				<p>Posters</p>
			</Link>
		</div>
            <div className='unit-nav-1'>
                <Link to='/kitfem/Kitfem2'>
                    <img src={Arengas} className="kitfemnav1"/>
                    <p>Arengas</p>
                </Link>
            </div>
            <div className='unit-nav-2'>
                <a href="entretenimiento.html">
                    <img src={Informate} className="kitfemnav1"/>
                    <p>Informate</p>
                </a>
            </div>
            <div className='unit-nav-3'>
                <a href="stickers.html">
                    <img src={Stickers} className="kitfemnav1"/>
                    <p>Stickers</p>
                </a>
            </div>
        </div>	
        </div>
  )
}

export default Menukitfem