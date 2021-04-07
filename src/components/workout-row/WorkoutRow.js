import 'bootstrap/dist/css/bootstrap.min.css';

function WorkoutRow({ item }) {
    if(item !== undefined){
        return (
            <div className={"row-" + item.id} data-testid={"row-" + item.id}>
                <div className="col-sm-4" >{item.col1}</div>
                <div className="col-sm-4" >{item.col2}</div>
                <div className="col-sm-4" >{item.col3}</div>
            </div>
        )
    }else{
        return null
    }
}

export default WorkoutRow;