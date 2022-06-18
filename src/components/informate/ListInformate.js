import Informate from "./CardInformate";
import { CardGroup, Form, Modal, ModalTitle} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


function ListInformate(){
    //url
    const url="http://localhost:1000/series";
    //funcion petición
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }
    //useState guardar respuesta
    const [list,setlist]=useState([]);
    //actulizacion page despues de eliminar
    const [uplist,setUplist]=useState(false);
    //useState actualizar el estado del modal
    const [show,setShow]=useState(false);

    const handleClose=()=>{setShow(false);}
    const handleOpen=()=>{setShow(true);}
    //obtener datos de ediccion
    const [dataModal, setDataModal] = useState({})
    //
    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }
    //sweet alert
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        console.log(response);  
        if(response.status===200){
            Swal.fire(
                'Cambio Guardado!',
                `El personaje <strong> ${response.data.titulo}</strong> ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!uplist);
        }
        else{
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el estudiante!',
                'error'
            )
        }
    }
    //useEffect ejecutar funciones desde el inicio del renderizado
    useEffect(()=>{
        getData().then((response)=>{
            setlist(response.data);
        })
    },[uplist])
    console.log(list);
    return(
        <div>
        <div className="d-flex flex-nowrap justify-content-center m-2">
            <CardGroup className="gap-4 mx-auto">
                {
                    list.map((es, index) => (
                    <Informate
                        key={index}
                        serie={es}
                        setUplist={setUplist}
                        uplist={uplist}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        setDataModal={setDataModal} />
                ))}
            </CardGroup>
        </div>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <ModalTitle>Editar Personaje </ModalTitle>
                </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                               <Form.Group className="mb-3">
                                   <Form.Label>Nombre</Form.Label>
                                   <Form.Control
                                       type="text"
                                       placeholder="Ingrese el Nombre de la película o serie"
                                       name="titulo"
                                       value={dataModal.titulo}
                                       onChange={handleChangeModal}
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3">
                                   <Form.Label>Sipnosis</Form.Label>
                                   <Form.Control
                                       type="text"
                                       placeholder="Ingrese una pequeña descripción de la película o serie sin spoilers"
                                       name="detalle"
                                       value={dataModal.detalle}
                                       onChange={handleChangeModal}
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3">
                                   <Form.Label>Imagen</Form.Label>
                                   <Form.Control
                                       type="url"
                                       placeholder="Ingrese la URL de la imagen de la portada de la película o serie"
                                       name="img"
                                       value={dataModal.img}
                                       onChange={handleChangeModal}
                                   />
                               </Form.Group>
                               </Modal.Body>
                               <Modal.Footer>
                                    <button className="btn btn-secondary" onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className="btn btn-primary" type="submit">
                                        Guardar Cambios
                                    </button>
                                </Modal.Footer>
                    </Form>
                </Modal>
        </div>
    );
}
export default ListInformate