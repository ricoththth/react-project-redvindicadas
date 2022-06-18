import {Container, Form} from "react-bootstrap"
import axios from "axios"
import Swal from "sweetalert2"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
function FormSeries(){
    const Navigate=useNavigate();
    const[data, setData]=useState({id:"",titulo:"", img:"", detalle:"", genero:"", tipo:"",duracion:"", ver:"", descripcion:""})
    const handleChange=({target})=>{
        setData({
            ...data,
            [target.name]
            :target.value
        } )
    }
    const url="http://localhost:1000/series";
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        if(response.status===201){
            Swal.fire(
                'Guardado!',
                `Felicidades <strong>
                ${response.data.titulo}
                </strong>
                se ha sido guardado exitosamente!`,
                    'success'
            )
                Navigate("/redv-pers/kit-fem/informate/");
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al registrarlo!`,
                    'error'
            )
        }
    }
    return(
            <Container className="form-crud">
            <h1 className="mb-4">Formulario</h1>
            <div className="form-crud-inside">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese el Nombre de la película o serie"
                    name="titulo"
                    value={data.titulo}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Formato</Form.Label>
                        <select class="form-select" id="inputGroupSelect01" 
                        type="text"
                        placeholder="Ingrese el formato en el que se encuentra el producto multimedia"
                        name="tipo"
                        required
                        value={data.tipo}
                        onChange={handleChange}>
                            <option selected>Elige...</option>
                            <option value="1">película</option>
                            <option value="2">serie</option>
                        </select>
                    </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Sipnosis</Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese una pequeña descripción de la película o serie sin spoilers"
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Género</Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese los géneros en el que se clasifica la película o serie"
                    name="genero"
                    value={data.genero}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Duración</Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Duración de la película o serie sin spoilers"
                    name="duracion"
                    value={data.duracion}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Plataformas</Form.Label>
                <Form.Control
                   type="text"
                   required
                    placeholder="En que plataformas se puede ver la película o serie sin spoilers"
                    name="ver"
                    value={data.ver}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Poster</Form.Label>
                <Form.Control
                    type="url"
                    required
                    placeholder="Ingrese la URL de la imagen de la portada de la película o serie"
                    name="img"
                    value={data.img}
                    onChange={handleChange}
                />
                </Form.Group>
                <button className='btn btn-form'>
                    Guardar
                </button>
            </Form>
            </div>
            </Container>
    );
}
export default FormSeries