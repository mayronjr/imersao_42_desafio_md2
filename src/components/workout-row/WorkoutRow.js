import 'bootstrap/dist/css/bootstrap.min.css';

function WorkoutRow({ item }) {
    if(item !== undefined){
        return (
            <div className={"row-" + item.id} data-testid={"row-" + item.id}>
                <div className="col-sm-4" >{item.tempo}</div>
                <div className="col-sm-4" >{item.type}</div>
                <div className="col-sm-4" >{item.date.toLocaleDateString()}</div>
            </div>
        )
    }else{
        return null
    }
}

export default WorkoutRow;