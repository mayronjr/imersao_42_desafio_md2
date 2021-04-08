import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkoutForm.css';
import { Component } from 'react';

import getDateInInputFormat from './scripts.js';

class WorkoutForm extends Component {
    constructor(props){
        super(props)
        let aux = getDateInInputFormat()
        this.state = {
            valueInput1: 1,
            valueInput2: aux,
            min: aux
        }
    }

    handleValueInput1 = (e) =>{
        if(!isNaN(Number(e.target.value)) && e.target.value.length !== 0){
            this.setState({valueInput1: e.target.value})
        }
    }

    handleValueInput2 = (e)=>{
        if(e.target.value >= this.state.min){
            this.setState({
                valueInput2: e.target.value
            })
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let newWorkout = {
            tempo: Number(e.target.time.value),
            type: e.target.type.value,
            date: new Date(e.target.date.value)
        }
        if(this.props.onSubmit !== undefined){
            this.props.onSubmit(newWorkout)
        }
    }

    render(){
        let {valueInput1, valueInput2, min} = this.state
        return(
            <form className="container WorkoutForm" onSubmit={this.handleSubmit.bind(this)} data-testid="form">
                <input name="time" type="number" min="1" value={valueInput1} onChange={this.handleValueInput1.bind(this)}/>
                <select name="type" id="type">
                    <option value="run">Run</option>
                    <option value="swimming">Swimming</option>
                    <option value="bike">Bike</option>
                </select>
                <input name="date" type="date" min={min} value={valueInput2} onChange={this.handleValueInput2.bind(this)}/>
                <button type="submit" data-testid="form-submit">Add</button>
            </form>
        )
    }
}

export default WorkoutForm;