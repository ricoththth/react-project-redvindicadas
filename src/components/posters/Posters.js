import React from 'react'
import './Posters.css';
import Vectorkit1 from "../../icons/Vector kitfem1.png"
import Vectorkit3 from "../../icons/Vector kitfem3.png"
import Poster1 from "../../icons/poster1.svg"
import Poster2 from "../../icons/poster2.svg"
import Poster3 from "../../icons/poster3.svg"
import Poster4 from "../../icons/poster4.svg"
import Poster5 from "../../icons/poster5.svg"
import Poster6 from "../../icons/poster6.svg"
import Poster7 from "../../icons/poster7.svg"
import Poster8 from "../../icons/poster8.svg"
import Poster9 from "../../icons/poster9.svg"
import Vectorkit2 from "../../icons/Vector kitfem2.png"
import Vectorkit4 from "../../icons/Vector kitfem4.png"


function Posters() {
  return (
    <div>

          <div className='section-tittle'>
              <h2>
                  POSTERS
              </h2>
          </div>

          <div className='content-posters-general'>
              <div className='content-kit-left'>
                  <img src={Vectorkit1} />
                  <img src={Vectorkit3} />
              </div>
              <div className='content-middle-posters'>
                  <img src={Poster1} />
                  <img src={Poster2} />
                  <img src={Poster3} />
                  <img src={Poster4} />
                  <img src={Poster5} />
                  <img src={Poster6} />
                  <img src={Poster7} />
                  <img src={Poster8} />
                  <img src={Poster9} />
              </div>
              <div className='content-kit-rigth'>
                  <img src={Vectorkit2} />
                  <img src={Vectorkit4} />
              </div>
          </div>
          <div>
              <section id="button-orange">
              <a href="icons/Redvindicadas.zip" download>
                  <button class="cssbuttons-io-button" download="../../icons/poster1.svg">
                      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path></svg>
                      <span>Download</span>
                  </button>
                </a>
              </section>
          </div>
      </div>
  )
}

export default Posters