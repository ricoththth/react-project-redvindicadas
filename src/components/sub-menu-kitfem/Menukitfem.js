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
        <div class="unit-nav-1">
			<Link to='/redv-pers/kit-fem'>
             <img src={Posters} className="kitfemnav1"/>
				<p>Posters</p>
			</Link>
		</div>
            <div className='unit-nav-1'>
                <Link to='/redv-pers/kit-fem/arengas/' className="kitfemnav1">
                    <img src={Arengas} />
                    <p>Arengas</p>
                </Link>
            </div>
            <div className='unit-nav-2'>
            <Link to='/redv-pers/kit-fem/informate/' className='kitfemnav1'>
                    <img src={Informate} />
                    <p>Informate</p>
                </Link>
            </div>
            <div className='unit-nav-3'>
            <Link to='/redv-pers/kit-fem/stickers/' className='kitfemnav1'>
                    <img src={Stickers}/>
                    <p>Stickers</p>
            </Link>
            </div>
        </div>	
        </div>
  )
}

export default Menukitfem