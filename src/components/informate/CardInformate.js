import React from 'react'
import './Informate.css';
import ModalJuegos from './ModalInf';
import {Card, Button, Container, Row } from 'react-bootstrap';
import axios from "axios";
import Swal from "sweetalert2";

function Informate({serie, setUplist, upList, handleOpen, setDataModal} ) {
  const url = "http://localhost:1000/series";
  const handleDelete = async () => {
    Swal.fire({
      title: '¿Estás seguro que desea eliminar este estudiante?',
      text: "no puede revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!',
      cancelButtonText: "cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        /*Eliminar el registro de la BD falsa*/
        axios.delete(`${url}/${serie.id}`).then((response) => {
          console.log(response)
          if (response.status === 200) {
            Swal.fire(
              'Deleted!',
              'El personaje ha sido eliminado.',
              'success'
            )
            /*!upLista tambien podria ser true */
            setUplist(!upList);
          } else {
            Swal.fire(
              'Error!',
              'Hubo un problema al borrar el estudiante.',
              'error'
            )
          }
        })
      }
    })
  }
  const handleEdit=()=>{
    handleOpen();
    setDataModal(serie)
  }

  return(
        
    <Row  className="mx-auto">  
    <Container className="container-card mx-auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={serie.img} style={{ height: '15rem' }}/>
              <Card.Body>
                <Card.Title>{serie.titulo}</Card.Title>
                <Card.Text>
                    {serie.tipo}
                </Card.Text>
                </Card.Body>
                <button className="button-verahora btn my-1 mx-3 mb-4" data-bs-toggle="modal" data-bs-target={`#id${serie.id}`} >Ver más</button> 
                <Button className=" btn btn-form my-1 mx-3" onClick={handleEdit}>Editar</Button>
                <Button className="btn btn-form-deleted my-1 mx-3 mb-3" onClick={handleDelete}> Eliminar</Button>
            
            </Card>
        
    <ModalJuegos
            idModulo={`id${serie.id}`}
             tituloModulo={serie.titulo}
             imgModulo={serie.img}
             descripcionModulo={serie.descripcion}
             generoModulo={serie.genero}
             tipoModulo={serie.tipo}
             duracionModulo={serie.duracion}
             verModulo={serie.ver}/>
    </Container></Row>        
    );
}

export default Informate