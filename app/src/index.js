import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' ;
import { Database } from './database.js';
import noProfilePic from './noprofilepic.png';
import { Pages } from './pages.js';
import { filters } from './filterby.js';
import { AllChallenges } from './challenges.js';
// function Counter () {
    //     const [count, setCount] = React.useState(0);
    
    //     function Inc() {
        //         setCount(count + 1);
//     }

//     return (
    //         <div>
    //             <h1>Counter</h1>
    //             <p>{count}</p>
    //             <button onClick={Inc}>Increment</button>
    //         </div>
//     );
// }

// class CustomInput extends React.Component {
    //     state = {
//         degrees: 0
//     }
//     render() {
    //         return (
        //             <div>
        //                 <input type="number" onChange={this.handleChange}/>
        //                 <p>{Convert(this.state.degrees)}</p>
        //             </div>
        //         );
        //     }
        //     handleChange = (e) => {
            //         //update state
            //         this.setState({degrees: e.target.value});
            //     }
            
// }

// function Convert(degrees) {
    //     return degrees * 1.8 + 32;
    // }

    // let el = <div><Counter /><CustomInput /></div>
    
    // function Refresh() {
        //     root.render(
            //         el
            //     );
            // }


let database = null;
let currentPage = null;

const root = ReactDOM.createRoot(document.getElementById('root'));
            
function App() {
    return (
        <div className='app'>
            <Header />
            <Content />
        </div>
    );
}

/*CONTENT*/
function Content() {
    let content = null;
    if (currentPage === 'strength') {
        content = <Strength />;
    } else if (currentPage === 'random') {
        content = <Random />;
    }
    return (
        <div className='content'>
            {content}
        </div>
    );
}

function Strength() {
    let exercises = database.GetExercises();
    let elements = [];
    let filterElements = SetupFilterElements();
    exercises.forEach(element => {
        elements.push(<Exercise key = {element.name} name = {element.name}/>);
    });

    function Exercise(props) {
        return (
            <div className='exercise'>
                <div className='exercise-name'>
                    <p>Exercise Name {props.name}</p>
                </div>
            </div>
        );
    }

    function ExerciseFilterBtn(props) {
        return (
            <div className='exercise-filter-btn'>
                <i className={props.icon}></i>
                <p>{props.name}</p>
            </div>
        );
    }

    function SetupFilterElements() {
        let elements = [];
        for (const [key, value] of Object.entries(filters)) {
            elements.push(<ExerciseFilterBtn key={key} name={value.name} icon={value.icon}/>);
        }
        return elements;
    }

    return (
        <div className='content-strength'>
            <div className='execises-filter'>
                {filterElements}
            </div>
            <div className='exercises'>
                {elements}
            </div>
        </div>
    );

}

function Random() {
    let challenges = database.GetCurrentUserChallenges();
    let elements = [];

    challenges.forEach(element => {
        
        elements.push(<Challenge key = {element.uid} name = {AllChallenges[element.type].name} amount = {element.amount} status = {element.status} />);
    });

    function Challenge(props) {
        let btn = "fa-solid fa-check";

        let className = "challenge";
        if (props.status === 0) {
            className += ' red';
            btn = "fa-solid fa-check"

        } else if (props.status === 1) {
            className += ' yellow';

        } else if (props.status === 2) {
            className += ' green';
            btn = "fa-solid fa-arrows-rotate"
        }

        let content = <div className='challenge-name'>
            <p className='challenge-type'>{props.name}</p>
            <div className='challenge-info'>
                <div className='challenge-amount'><p>Antal: 10000000</p></div>
                <div className='challenge-amount'><p>100</p></div>
            </div>
            <div className='challenge-btn'><i className={btn}></i></div>
        </div>


        return (
            <div className={className}>
                {content}
            </div>
        );
    }

    return (
        <div className='content-random'>
            <div className='challenges'>
                {elements}
            </div>
        </div>
    );
}

/*HEADER*/
function Header() {
    return (
        <div className='header'>
            <NavBar />
            <CurrentProfile />
        </div>
    )
}

/*NAVIGATION*/
function NavBar() {
    return (
        <div className='nav-bar'>
            <NavElements />
        </div>
    );
}

function NavElements() {
    let elements = [];
    //Loop through pages
    for (const [key, value] of Object.entries(Pages)) {
        let isActive = false;
        if (currentPage === key) {
            isActive = true;
        }
        elements.push(<NavElement key = {key} name = {key} icon={value.icon} isActive = {isActive} />);
    }
    return (
        <div className='nav-elements'>
            {elements}
        </div>
    );
}

function NavElement(props) {
    let className = 'nav-element';
    let activeLine = null;

    if (props.isActive) {
        activeLine = <div className='active-line'></div>;
        className += ' active';
    }

    return (
        <div className= {className} onClick={() => SelectPage(props.name)}>
            <i className={props.icon}></i>
            {activeLine}
        </div>
        
    );
}

function CurrentProfile() {
    let CurrentUserProfilePic = database.GetCurrentUserProfilePic();
    let profilePic = (CurrentUserProfilePic == null) ? noProfilePic : CurrentUserProfilePic;
    return (
        <div className='current-profile'>
            <img src={profilePic} alt="img"></img>
        </div>
    );
}

function SelectPage(page) {
    currentPage = page;
    Refresh();
}

/*INITIALIZE*/
function Start() {
    database = new Database();

    currentPage = Object.entries(Pages)[0][0];

    root.render(
        <App />
    );
}

function Refresh() {
    root.render(
        <App />
    );
}

Start();