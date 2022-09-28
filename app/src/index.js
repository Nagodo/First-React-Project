import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let count = 0;

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>{count}</p>
                <button onClick={Inc}>Increment</button>
            </div>
        );
    }
    
}



function Inc() {
    count++;
    Refresh();
}

function Refresh() {
    root.render(
        <Counter />
    );
}

Refresh();
