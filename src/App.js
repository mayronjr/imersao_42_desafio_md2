import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react'

import WorkoutList from './components/workout-list/WorkoutList.js';
import Counter from './components/hour-counter/Counter.js';

class App extends Component {
  state = {
    workoutList: [
      { tempo: 1, type: 'Run', date: new Date(2011, 10, 24) },
      { tempo: 3, type: 'Swimming', date: new Date(2011, 8, 24) }
    ]
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
        <div className="container">Entry Form</div>
        <WorkoutList list={workoutList}/>
        <Counter counter={temp}/>
      </div>
    );
  }
}

export default App;
