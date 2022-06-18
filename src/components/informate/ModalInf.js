import {Button} from "react-bootstrap"
function ModalJuegos(serie){
    return(
        <div className="modal fade" id={serie.idModulo} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <modal-Title id="contained-modal-title-vcenter">
                    </modal-Title>
                        <h2 class="text-center">{serie.tituloModulo} </h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={serie.imgModulo} style={{ height: '18rem' }} className="card-img-top mx-auto d-blocserie" alt="" />
                        <p class="text-start mt-3"><span>Sipnosis:</span> {serie.descripcionModulo}</p>
                        <p class="text-start"><span>Género:</span> {serie.generoModulo} </p>
                        <p class="text-start"><span>Duración:</span> {serie.duracionModulo} </p>
                        <p class="text-start"><span>Actualmente, usted es capaz de ver {serie.tituloModulo} en:</span> {serie.verModulo} </p>
                       
                        <div className="modal-footer">
                            <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default ModalJuegos