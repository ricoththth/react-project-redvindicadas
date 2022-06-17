import React from 'react'
import './Arengas.css';
import Vectorkit1 from "../../icons/Vector kitfem1.png"
import Vectorkit3 from "../../icons/Vector kitfem3.png"
import Vectorkit2 from "../../icons/Vector kitfem2.png"
import Vectorkit4 from "../../icons/Vector kitfem4.png"

function Arengas() {
    return (
        <div>
            <div className='section-tittle'>
                <h2>
                    ARENGAS
                </h2>
            </div>

            <div className='content-posters-general'>
                <div className='content-kit-left'>
                    <img src={Vectorkit1} />
                    <img src={Vectorkit3} />
                </div>


<div className='content-middle-cards'>

              <center><iframe className='vivirpalomarsong' src="https://www.youtube.com/embed/dTzx6gV5LdQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
              <div className='arengastext'>
              <p>Tú me quieres virgen.
                Tú me quieres santa.
                Tú me tienes harta.</p>
               <p>  Si el papa fuera mujer,
                si el papa fuera mujeeer,
                si el papa fuera mujeeeeeer,
                el aborto sería legal.
                Sería legal y seguro,
                sería legal seguro,
                sería legal y seguuurooooo00,
                si el papa fuera mujer.
                </p>
               <p>Mi cuerpo es mío. Solo mío, mío, mío.
                </p>
               <p>Contra el patriarcado y su violencia,
                ahora y siempre ¡AUTODEFENSA!
                </p>
                <p> Van a volveeer, las balas que disparaste įvan
                    a volver!
                    La sangre que derramaste ¡La pagarás!
                    Las mujeres que asesinaste ¡No morirán!
                    ¡NO MORIRÁN
                    </p>
                    <p> Vecino, vecina, no sea indiferente
                        ¡Se mata a las mujeres delante de la gente!
                        </p>
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

export default Arengas