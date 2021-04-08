import 'bootstrap/dist/css/bootstrap.min.css';

function WorkoutRow({ item }) {
    if(item !== undefined){
        let rem_button = item.id !== -1 ? <td><button onClick={()=>{item.handleDelete(item.id)}}>Delete</button></td> : <td></td>
        return (
            <tr data-testid={"row-" + item.id}>
                <td>{item.col1}</td>
                <td>{item.col2}</td>
                <td>{item.col3}</td>
                {rem_button}
            </tr>
        )
    }else{
        return null
    }
}

export default WorkoutRow;