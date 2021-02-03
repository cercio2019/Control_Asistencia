import axios from "axios";
import React from "react";

const url = "http://localhost:2000/";

class Configuracion extends React.Component{

    constructor(){
        super();
        this.state = {
            nombre_empresa : "",
            rif : "",
            datosDepartamentos : [],
            datosCargos : []
        };

        this.getEmpresa();
        this.getDepartamento();
    }

    getEmpresa = () =>{
        axios.get(url+'datos/empresa/1').then(response=>{
            this.setState({nombre_empresa : response.data.results[0].nombre_empresa});
            this.setState({rif : response.data.results[0].rif})
        }).catch(error =>{
            console.log(error.message);
        });
    }

    getDepartamento = () =>{
        axios.get(url+'datos/dep').then(response=>{
            this.setState({datosDepartamentos : response.data.datos});
        }).catch(error =>{
            console.log(error.message);
        });
    }

    getCargos = (nombre) =>{
        axios.get(url+'datos/cargos/'+nombre).then(response =>{
            this.setState({datosCargos : response.data.datos});
        }).catch(error=>{
            console.log(error.message);
        });
    }

    render(){

        return (
            <div className="container mt-5">
                <div className="row">
                    <div  className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                               
                                <h6> Datos de la empresa</h6>  <button className="btn btn-primary" >Editar</button>
                            </div>
                            <div  className="card-body">
                                <h2> {this.state.nombre_empresa}  </h2> {this.state.rif}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 " >
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <table className="table" >
                                    <thead className="bg-dark text-white" >
                                        <th>Nombre</th>
                                        <th>Nro empleados</th>
                                        <th></th>
                                        <th></th>
                                    </thead>
                                    <tbody>
                                   
                                        {this.state.datosDepartamentos.map(departamentos=>{
                                            return (
                                                <tr>
                                                <td> {departamentos.nombre} </td>
                                                <td> {departamentos.numero_empleados} </td>
                                                <td> <button className="btn btn-primary"  onClick={()=>this.getCargos(departamentos.nombre)} > Buscar </button> </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card" >
                            <div className="card-body">
                                <h5>Cargos</h5>    
                            </div>
                            <div className="card-body">
                                    
                                    {this.state.datosCargos.length > 0 ? 
                                    <ul>
                                    {this.state.datosCargos.map(cargos=>{
                                        
                                        return(
                                            <li> {cargos.nombre_cargo}  </li>
                                        )

                                    })}
                                    </ul>
                                    : <h3>Seleccione departamento por favor</h3>}
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Configuracion;