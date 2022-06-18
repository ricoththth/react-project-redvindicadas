import React from 'react'
import './Stickers.css';
import Vectorkit1 from "../../icons/Vector kitfem1.png"
import Vectorkit3 from "../../icons/Vector kitfem3.png"
import Vectorkit2 from "../../icons/Vector kitfem2.png"
import Vectorkit4 from "../../icons/Vector kitfem4.png"
import {Card } from 'react-bootstrap';

function Stickers(h) {
    return (

        <div>

            <div className='section-tittle'>
                <h2>
                    Stickers
                </h2>
            </div>


            <div className='content-posters-general'>
                <div className='content-kit-left'>
                    <img src={Vectorkit1} />
                    <img src={Vectorkit3} />
                </div>


                <div className='content-middle-cards'>
                    <div className='card-stickers'>
                        <div className='card-stickers1'>
                        <img src="..." class="card-img-top stickers" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div class="card-stickers1">
                        <img src="..." class="card-img-top stickers" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div class="card-stickers1">
                        <img src="..." class="card-img-top stickers" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div class="card-stickers1">
                        <img src="..." class="card-img-top stickers" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='content-kit-rigth'>
                    <img src={Vectorkit2} />
                    <img src={Vectorkit4} />
                </div>

            </div>

        </div>
    )
}

export default Stickers