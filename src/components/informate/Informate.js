import React from 'react'
import './Informate.css';
import Vectorkit1 from "../../icons/Vector kitfem1.png"
import Vectorkit3 from "../../icons/Vector kitfem3.png"
import Vectorkit2 from "../../icons/Vector kitfem2.png"
import Serie1 from "../../icons/entertaiment1poster.jpg"
import Vectorkit4 from "../../icons/Vector kitfem4.png"
import Serie2 from "../../icons/poster1.svg"
import Serie3 from "../../icons/entertaiment3poster.jpg"
import Serie4 from "../../icons/entertaiment4poster.jpg"
import Podcastkit from './Podcastkit';

function Informate() {
    return (
        <div>

            <div className='section-tittle'>
                <h2>
                    INFORMATE
                </h2>
            </div>


            <div className='content-posters-general'>
                <div className='content-kit-left'>
                    <img src={Vectorkit1} />
                    <img src={Vectorkit3} />
                </div>


                <div className='content-middle-cards'>
                    <Podcastkit/>
                    
                </div>


                <div className='content-kit-rigth'>
                    <img src={Vectorkit2} />
                    <img src={Vectorkit4} />
                </div>

            </div>

        </div>
    )
}

export default Informate