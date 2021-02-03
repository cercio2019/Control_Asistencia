import axios from "axios";
import React from "react";

const url = "http://localhost:2000/usuarios"

class Usuarios extends React.Component{

    constructor(){
        super();
        this.state = {
            data : []
        };

        this.getUsuarios();
    }

    getUsuarios = () =>{
        axios.get(url).then(response=>{
            this.setState({data : response.data.usuarios});
        }).catch(error =>{
            console.log(error.message);
        });
    }

    render(){
        return(
            <div className="container" >
                <div className="row" >
                    <div className="col-md-9" >
                        <div className="card" >
                            <div className="card-body" >
                                <table className="table" >
                                    <thead  className="bg-dark text-white " >
                                        <th>CEDULA</th>
                                        <th>NOMBRE</th>
                                        <th>NIVEL</th>
                                        <th>ESTATUS</th>
                                    </thead>
                                    <tbody>
                                       
                                        {this.state.data.map(usuarios=>{
                                           return(
                                            <tr>
                                            <td> {usuarios.cedula} </td>
                                            <td> {usuarios.nombre} {usuarios.apellido} </td>
                                            <td> {usuarios.nivel} </td>
                                            <td> {usuarios.status} </td>
                                            </tr>
                                           )
                                        })} 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Usuarios;