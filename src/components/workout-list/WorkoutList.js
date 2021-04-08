import 'bootstrap/dist/css/bootstrap.min.css';

import WorkoutRow from '../workout-row/WorkoutRow.js';

function WorkoutList({ list, handleDelete }) {
    if (list !== undefined) {
        const header = {
            col1: "Tempo",
            col2: "Tipo",
            col3: "Data",
            id: -1
        }
        return (
            <table className="container table table-bordered" data-testid="workout-list">
                <tbody>
                    <WorkoutRow item={header} key={-1} />
                    {list.map((item, _index) => {
                        item = {
                            col1: item.tempo + ' h',
                            col2: item.type,
                            col3: item.date.toLocaleDateString(),
                            id: _index,
                            handleDelete: handleDelete
                        }
                        return (<WorkoutRow item={item} key={_index} />)
                    })}
                </tbody>
            </table>
        );
    } else {
        return null
    }

}

export default WorkoutList;