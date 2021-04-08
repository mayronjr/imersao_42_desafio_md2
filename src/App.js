import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';

import WorkoutForm from './components/workout-input/WorkoutForm.js';
import WorkoutList from './components/workout-list/WorkoutList.js';
import Counter from './components/hour-counter/Counter.js';

class App extends Component {
  state = {
    workoutList: []
  }

  handleNewWorkoutSubmition = (newWorkout) =>{
    let {workoutList} = this.state
    workoutList = workoutList.concat(newWorkout)
    this.setState({workoutList})
  }

  handleDeleteWorkoutSubmition = (delWorkout) => {
    let {workoutList} = this.state
    workoutList = workoutList.filter((it, _index)=>_index !== delWorkout)
    this.setState({workoutList})
  }

  render(){
    let {workoutList} = this.state
    let temp = 0
    for(let i in workoutList){
      temp += workoutList[i].tempo
    }
    return (
      <div className="App">
        <header className="App-header">
          Workout Log
        </header>
        <WorkoutForm onSubmit={this.handleNewWorkoutSubmition.bind(this)}/>
        <WorkoutList handleDelete={this.handleDeleteWorkoutSubmition} list={workoutList}/>
        <Counter counter={temp}/>
      </div>
    );
  }
}

export default App;
