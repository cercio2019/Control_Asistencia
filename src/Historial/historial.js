import React from "react";
import axios from "axios";


const  url = "http://localhost:2000/asistencias";

class Historial extends React.Component{

    constructor(){
        super();
        this.state = {
            datos : [],
            fechaDesde : '',
            fechaHasta : ''
           
        }
        this.rangoFecha = this.rangoFecha.bind(this);
    }

    rangoFecha = (e)=>{
        const {name, value} = e.target;
        this.setState({[name] : value  })
    } 
    
    getInfo = async()=>{
        let fechas = { fechaDesde : this.state.fechaDesde,
              fechaHasta : this.state.fechaHasta };
              console.log(fechas)
        await axios.post(url+'/fechas', fechas).then(response=>{
            this.setState({datos : response.data.datos})
            console.log(this.state.datos);
        }).catch(error=>{
            console.log(error.message);
        });
    }

    configHora = (hora)=>{
        let tiempo = new Date(`December 17, 1995, ${hora}`);
        let horas = tiempo.getHours();
        let minutos = tiempo.getMinutes();
        let segundos = tiempo.getSeconds();
        console.log(`${horas}-${minutos}-${segundos}`);
        let estacion = (horas < 12? 'AM' : 'PM')
        let hours = (horas > 12? horas - 12 : horas )
        return `${hours < 10? '0'+hours : hours}-${minutos<10? '0'+minutos : minutos}-${segundos<10? '0'+segundos : segundos}  ${estacion}`; 
    }

    render(){
        return (
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-4" >
                        <label>Desde:</label>
                        <input type="text" name="fechaDesde" onChange={this.rangoFecha} value={this.state.fechaDesde} className="form-control"   />
                    </div>
                    <div className="col-md-4" >
                        <label>Hasta:</label>
                        <input type="text" name="fechaHasta" onChange={this.rangoFecha} value={this.state.fechaHasta} className="form-control"   />
                    </div>
                    <div className="col-md-4" >
                        <button onClick={()=>this.getInfo()} className="btn btn-primary" >
                            Buscar
                        </button>
                    </div>
                    
                </div>

                <div  className="row mt-5 ">
                    <div className="col-md-10">
                        <div className="card" >
                            <div className="card-body" >
                                <table className="table" >
                                    <thead className="bg-dark text-white"  >
                                        <th>Cedula</th>
                                        <th>Nombre</th>
                                        <th>Cargo</th>
                                        <th>Fecha</th>
                                        <th>H. entrada </th>
                                        <th>H. salida</th>
                                    </thead>
                                    <tbody>
                                        {this.state.datos.length > 0 ?
                                            this.state.datos.map(asistencias=>{
                                                return(   
                                                    <tr>
                                                        <td> {asistencias.cedula} </td>
                                                        <td> {asistencias.nombre_apellido} </td>
                                                        <td> {asistencias.cargo} </td>
                                                        <td> {asistencias.fecha} </td>
                                                        <td> {this.configHora(asistencias.horaEntrada)} </td>
                                                        <td> {this.configHora(asistencias.horaSalida)}  </td>
                                                    </tr>
                                                )
                                            })
                                        : <h3>Pofavor Seleccionar rango de fecha</h3> }
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

export default Historial;