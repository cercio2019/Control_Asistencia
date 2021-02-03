import React from "react";

const url = "http://localhost:2000/dashboard";

class Monitoreo extends React.Component{

    constructor(){
        super();
        this.state = {
            entrada : [],
            salida : [],
            total : []
        }

        this.calcularEntrada();
        this.calcularSalida();
        this.calcularTotal();

    }

    calcularEntrada = () =>{
        
        fetch(`${url}/entrada/${this.fechaHoy()}`)
        .then(response => response.json())
        .then(data =>{
           this.setState({entrada : data.results[0].nroEntrada })
        })
    }

    calcularSalida = () =>{  
        fetch(`${url}/salida/${this.fechaHoy()}`)
        .then(response => response.json())
        .then(data =>{
            this.setState({salida : data.results[0].nroSalida })
        })
    }

    calcularTotal = ()=>{
        
        fetch(`${url}/total`)
        .then(response => response.json())
        .then(data =>{
            this.setState({total : data.results[0].nroEmpleados })
        })
    }

    fechaHoy = ()=>{
        const hoy = new Date();
        let dia = hoy.getDate();
        let mes = hoy.getMonth();
        let ano = hoy.getFullYear()
        mes = mes + 1;
        let fecha = `${ano}-${mes < 10? '0'+mes : mes}-${dia < 10? '0'+dia : dia}`;
        return fecha;
    }
 
    render(){

        return (
            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Registro de entrada</h5>
                            </div>
                            <div className="card-body">
        
                                <h1> {this.state.entrada}  trabajadores </h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Registro de salida</h5>
                            </div>
                            <div className="card-body">
                            
                                <h1> {this.state.salida} trabajadores </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 " >
                    <div className="col-12" >
                        <div className="card" >
                            <div className="card-header" >
                                <h5>Total de empleados</h5>
                            </div>
                            <div>
                              
                                <h1> {this.state.total} trabajadores</h1>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Monitoreo;