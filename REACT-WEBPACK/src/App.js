import React, {useState, useRef} from 'react'; 

export function App() {
    return (
        <div> 
            <h1> Date: { new Date().toDateString() }</h1>
        </div>
    );
}


export function Counter() {
    const [count,setCount] = useState(0); 
    
    return (
        <div className="counter-button-container">
            <button id="subtract" className="counter-button" onClick={()=>setCount(count - 1)}>
                <b>-</b>
            </button>
            
            <button className="counter-button">
                {count}
            </button>


            <button id="append" className="counter-button" onClick={()=>setCount(count + 1)}>
                <b>+</b>
            </button>
        </div>
    );
}


export function Show(){
    const [showComponent, setState] = useState(false); 
    return (
        <div>
            <button onClick = {() => setState(!showComponent)}>Toggle</button>
            {showComponent ? <Hidden /> : null}
        </div>
    );
}

export function Hidden(){
    return (
        <h1>Hello world!!</h1>
    )
}

export function NameField() {
    const [name, setState] = useState(''); 
    return (
        <div>
            <h1>My name is:  {name}</h1>
            <br></br>
            <input value={name} onChange= {e => setState(e.target.value)}/>
        </div>
    ); 

}