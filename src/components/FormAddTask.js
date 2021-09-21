import React, { Component } from "react";





class FormAddTask extends Component{
    constructor() {
        super();
        this.state={
            "title":"",
            "responsable": "",
            "description" : "",
            "priority" :"Low"
        };
        this.handlerInput=this.handlerInput.bind(this);
       this.handlerSubmit= this.handlerSubmit.bind(this);
      }

    handlerInput(e){
       
        const {value, name} = e.target;

        this.setState({
           [name]: value
        })
        
    }
    handlerSubmit(e){
        e.preventDefault();
        this.props.onAddToDo (this.state)
        console.log(this.state)
    }
    render(){
        return(
            
                <form onSubmit={this.handlerSubmit}>
                
                    <fieldset >
                        <legend>Agregar Tarea</legend>
                        <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Titulo</label>
                        <input 
                            type="text" 
                            id="disabledTextInput" 
                            name="title"
                            class="form-control" 
                            onChange={this.handlerInput}
                            placeholder="Titulo de la tarea"/>
                        </div><div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Descripcion</label>
                        <input 
                            type="text" 
                            id="disabledTextInput" 
                            name="description"
                            class="form-control" 
                            onChange={this.handlerInput}
                            placeholder="Descripcion de la tarea"/>
                        </div>
                        <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Persona a Cargo</label>
                        <input 
                            type="text" 
                            id="disabledTextInput" 
                            name="responsable"
                            class="form-control" 
                            onChange={this.handlerInput}
                            placeholder="Persona a Cargo"/>
                        </div>
                        <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Prioridad</label>
                        <select id="Prioridad" class="form-select" name="priority" onChange={this.handlerInput}>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            



        )



    
        }     
}


export default FormAddTask;