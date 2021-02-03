import React from "react";
import axios from "axios";

const url = "http://localhost:2000/";

class FormEmpleado extends React.Component{

    constructor(){
        super();
        this.state = {
            datosDepartamentos : [],
            datosCargos : [],
            form : {
                cedula : '',
                nombre : '',
                apellido : '',
                departamento : '',
                cargo : '',
                fotoPerfil : ''
            }, 

            foto : ''
        }

        this.form = new FormData()
        this.createForm = this.createForm.bind(this);
        this.getDepartamento();
    }

    getDepartamento = () =>{
        axios.get(url+'datos/dep').then(response=>{
            this.setState({datosDepartamentos : response.data.datos});
        }).catch(error =>{
            console.log(error.message);
        });
    }

    getCargos = () =>{
        axios.get(url+'datos/cargos/'+this.state.form.departamento)
        .then(response =>{
            this.setState({datosCargos : response.data.datos});
        }).catch(error=>{
            console.log(error.message);
        });
    }

    createForm = async(e) =>{
        e.persist();
        await this.setState({ 

            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
              }
         });
         if(this.state.form.departamento != ''){this.getCargos()}
    }

    subirFoto = (e) =>{
        let reader = new FileReader();
        reader.onload =  async function(){
            if(reader.readyState === 2){
               await this.setState({
                        foto : reader.result
                    });  
              }
        }.bind(this);
        reader.readAsDataURL(e.target.files[0]);
        this.setState({form:{...this.state.form, fotoPerfil: e.target.files[0]}});
    }

    postForm = async() =>{

        let formEmpleado = new FormData();
        formEmpleado.append("cedula", this.state.form.cedula);
        formEmpleado.append("nombre", this.state.form.nombre);
        formEmpleado.append("apellido", this.state.form.apellido);
        formEmpleado.append("departamento", this.state.form.departamento);
        formEmpleado.append("cargo", this.state.form.cargo);
        formEmpleado.append("fotoPerfil", this.state.form.fotoPerfil, 'form-data');

        await axios.post(url+'empleados', formEmpleado).then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error.message);
        })  

    }

    render(){

        return (
            
            <div className="card" >
                <div className="card-header" >
                    <h3>Registrar Empleado</h3>
                </div>
                <div className="card-body">
                <div className="container mt-4 " >
                    <div className="row">
                    <div className="col-md-8">

                        <div className="form-group" >
                        <label> Cedula </label>
                        <input type="text" name="cedula" onChange={this.createForm} value={this.state.form.cedula}  className="form-control" />
                        </div>

                        <div className="form-group" >
                        <label> Nombre </label>
                        <input type="text" name="nombre" onChange={this.createForm} value={this.state.form.nombre}  className="form-control" />
                        </div>

                        <div className="form-group" >
                        <label> Apellido </label>
                        <input type="text"  name="apellido" onChange={this.createForm} value={this.state.form.apellido}  className="form-control" />
                        </div>

                        <div className="form-group" >
                        <label> Departamentos</label>
                        <select className="form-control"  name="departamento"  onChange={this.createForm}  value={this.state.form.departamento}  >
                            <option value="" > Seleccionar </option>
                            {this.state.datosDepartamentos.map(departamentos=>{
                                 return (
                                    <option value ={departamentos.nombre}>{departamentos.nombre}</option>
                                )
                            })}
                        </select>
                        </div>

                        <div className="form-group" >
                        <label> Cargos </label>
                        <select className="form-control"  name="cargo" onChange={this.createForm} value={this.state.form.cargo} >
                            <option value="" > Seleccionar </option>
                            {this.state.datosCargos.map(cargos=>{
                                        
                                return(
                                    <option  value={cargos.nombre_cargo} > {cargos.nombre_cargo} </option>           
                                )

                            })}
                        </select>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        
                    <div>
                        <img src={this.state.foto == ''? require("../img/perfil.png") : this.state.foto} className="img-fluid img-thumbnail" /> 
                        <input type="file" accept="image/*" class="form-control" name="fotoPerfil"  onChange={this.subirFoto}/>                    </div>
                            
                    </div>
                    </div>

                    <div className="row mt-4 " >
                        <div className="col-md-6 mx-auto " >
                            <button   className="btn btn-primary btn-block" onClick={()=>this.postForm()}>
                                Registrar
                            </button>
                        </div>  
                    </div>

                </div>
                </div>
            </div>
        )

    }

}

export default FormEmpleado;