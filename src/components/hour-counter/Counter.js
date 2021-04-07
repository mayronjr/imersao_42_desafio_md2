import 'bootstrap/dist/css/bootstrap.min.css';

function Counter({counter}) {
    let text = counter + " hours of exercises"
    return (
        <div className="container" data-testid="counter">
            {text}
        </div>
    );
}

export default Counter;
