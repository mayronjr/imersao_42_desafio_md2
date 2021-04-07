import 'bootstrap/dist/css/bootstrap.min.css';

import WorkoutRow from '../workout-row/WorkoutRow.js';

function WorkoutList({list}) {
    if(list !== undefined){
        return (
            <div className="container" data-testid="counter">
                {list.map((item, _index) => {
                    item = {
                        col1: item.tempo,
                        col2: item.type,
                        col3: item.date.toLocaleDateString(),
                        id: _index
                    }
                    return (<WorkoutRow item={{...item, id:_index}} key={_index} />)
                })}
            </div>
        );    
    }else{
        return null
    }
    
}

export default WorkoutList;