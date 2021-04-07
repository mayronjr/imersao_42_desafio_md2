import 'bootstrap/dist/css/bootstrap.min.css';

function WorkoutRow({ item, id }) {
    if(item !== undefined){
        return (
            <div className={"row-" + id} key={id} data-testid={"row-" + id}>
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