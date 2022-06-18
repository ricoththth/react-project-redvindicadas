import React from 'react'
import './Informate.css';
import ModalJuegos from './ModalInf';
import {Card, Button, Container, Row } from 'react-bootstrap';

function Informate(k) {
    return(
    <Row  className="mx-auto">
    <Container className="container-card mx-auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={k.img} />
              <Card.Body>
                <Card.Title>{k.titulo}</Card.Title>
                <Card.Text>
                    {k.tipo}
                </Card.Text>
                <button className="button-verahora btn" data-bs-toggle="modal" data-bs-target={`#id${k.id}`} >Ver más</button> 
              </Card.Body>
            </Card>
        
    <ModalJuegos
            idModulo={`id${k.id}`}
             tituloModulo={k.titulo}
             imgModulo={k.img}
             descripcionModulo={k.descripcion}
             generoModulo={k.genero}
             tipoModulo={k.tipo}
             duracionModulo={k.duracion}
             verModulo={k.ver}/>
    </Container></Row>
    );
}

export default Informate