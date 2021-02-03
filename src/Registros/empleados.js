import React from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter} from 'reactstrap';
import { NavLink } from 'react-router-dom';
const url = "http://localhost:2000/empleados";

class Empleados extends React.Component{


    constructor(){
        super();
        this.state ={
            data : [],
            form : {
                cedula : "",
                nombre : "",
                apellido : ""
            },
            modalEliminar : false
        }

        this.getEmpleados();
    }

    getEmpleados = ()=>{
        axios.get(url).then(response=>{
            this.setState({data : response.data.results});
        }).catch(error =>{
            console.log(error.message);
        });
    }

    deleteEmpleados = (cedula)=>{
        axios.delete(url+cedula).then(response=>{
            this.setState({modalEliminar:false});
            this.getEmpleados();
        }).catch(error=>{
            console.log(error.message);
        });
    }

    seleccionarEmpleado = (empleado) =>{

        this.setState({
            form : {
                cedula : empleado.cedula,
                nombre : empleado.nombre,
                apellido : empleado.apellido
            }
        })
        
    }
    
    cambiarModal = ()=>{
        this.setState({modalEliminar : !this.state.modalEliminar})
    }

    render(){

        return (
            <div className="container-fluid mt-5 " >
            <div className="row">
                <div className="col-9 mx-auto">
                   <div className="card">
                        <div className="car-body">
                        <table className="table">
                        <thead className="bg-dark text-white" >
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Departamento</th>
                            <th>Cargo</th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            {console.log(this.state.data)}
                            {this.state.data.map(empleados =>{
                                return (
                                    <tr>
                                        <td> {empleados.cedula} </td>
                                        <td> {empleados.nombre} </td>
                                        <td> {empleados.apellido} </td>
                                        <td> {empleados.departamento} </td>
                                        <td> {empleados.cargo}</td>
                                        <td>
                                            <button className="btn btn-primary " >
                                                editar
                                            </button>   
                                        </td>
                                        <td>
                                        <button className="btn btn-danger " onclick={()=>{this.seleccionarEmpleado(empleados); this.cambiarModal() }}  >
                                                eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                        </div>
                   </div>
                </div>
            </div>

            <div className="row" >
                <div className="col-md-8 mx-auto" >
                <NavLink to="/registrar" className="btn btn-primary btn-block" > Nuevo Empleado </NavLink>
                </div>
            </div>

            <Modal isOpen={this.state.modalEliminar} >
                <ModalBody>
                        <h4> ¿Estas Seguro de eliminar a {this.state.form.nombre} {this.state.form.apellido} del sistema? </h4>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onclick={()=>{this.deleteEmpleados(this.state.form.cedula)}}  >
                            SI
                    </button>   
                    <button className="btn btn-danger"  onclick={()=>{this.setState({modalEliminar:false})}} >
                            NO
                    </button>
                </ModalFooter>
            </Modal>

        </div>
        );
    }
}

export default Empleados;