import React from 'react'
import './Stickers.css';
import Vectorkit1 from "../../icons/Vector kitfem1.png"
import Vectorkit3 from "../../icons/Vector kitfem3.png"
import Vectorkit2 from "../../icons/Vector kitfem2.png"
import Vectorkit4 from "../../icons/Vector kitfem4.png"

function Stickers() {
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
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card text-bg-light h-100">
                                <img src="..." class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p className='card-texto'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
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