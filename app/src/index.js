import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Counter () {
    const [count, setCount] = React.useState(0);
    
    function Inc() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={Inc}>Increment</button>
        </div>
    );
}

class CustomInput extends React.Component {
    state = {
        degrees: 0
    }
    render() {
        return (
            <div>
                <input type="number" onChange={this.handleChange}/>
                <p>{Convert(this.state.degrees)}</p>
            </div>
        );
    }
    handleChange = (e) => {
        //update state
        this.setState({degrees: e.target.value});
    }

}

function Convert(degrees) {
    return degrees * 1.8 + 32;
}

let el = <div><Counter /><CustomInput /></div>

function Refresh() {
    root.render(
        el
    );
}

Refresh();
