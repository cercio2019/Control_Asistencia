import React from "react";


class FormEmpresa extends React.Component{

    render(){
        return(
            <form action="" >
                <div className="form-group">
                                <label>Nombre de la empresa *</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                <label>Rif de la empresa *</label>
                    <div className="row" >
                        <div className="col-3">
                           <select className="form-control" >
                                <option value="" > Seleccionar </option>
                                <option value="J-" > j </option>
                                 <option value="G-" > G </option>
                            </select>
                    </div>
                    <div className="col-9" >
                                 <input type="text" className="form-control"/>
                    </div>
                 </div>
                </div>
                <div className="form-group" >
                    <label> Tipo de sistema</label>
                        <select className="form-control" >
                            <option value="" >Seleccionar</option>
                        </select>
               </div>
                <div className="form-group" >
                    <button className="btn btn-dark btn-block  mx-auto  " >
                         GUARDAR
                    </button>
                </div>
            </form>
        );
    }
}

export default FormEmpresa;