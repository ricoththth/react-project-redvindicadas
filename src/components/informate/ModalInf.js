import {Button} from "react-bootstrap"
function ModalJuegos(k){
    return(
        <div className="modal fade" id={k.idModulo} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <modal-Title id="contained-modal-title-vcenter">
                    </modal-Title>
                        <h2 class="text-center">{k.tituloModulo} </h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={k.imgModulo} style={{ height: '18rem' }} className="card-img-top mx-auto d-block" alt="" />
                        <p class="text-start mt-3"><span>Sipnosis:</span> {k.descripcionModulo}</p>
                        <p class="text-start"><span>Género:</span> {k.generoModulo} </p>
                        <p class="text-start"><span>Duración:</span> {k.duracionModulo} </p>
                        <p class="text-start"><span>Actualmente, usted es capaz de ver {k.tituloModulo} en:</span> {k.verModulo} </p>
                        <div className="button-games mb-3">
                            <Button className=" btn-warning m-1">Editar</Button>
                            <Button className="btn-danger m-1"> Eliminar</Button>
                        </div>
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