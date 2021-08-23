import React, {useState, useEffect} from 'react'; 
import regeneratorRuntime from "regenerator-runtime";


export function App() {
    return (
        <div> 
            <h1> Date: { new Date().toDateString() } </h1>
        </div>
    );
}


export function Next(){
    const [count, setCount] = useState(0); 
    const [tq, setQuestion] = useState(null)
    const [options, setOptions] = useState(null)
    const [points, setPoints] = useState(0)
    const [revealAns, setRevealAns] = useState(false)

    useEffect(async () => {
        let categories = [9,15,17,18,20,22,23,27,28,30]
        let category = categories[Math.floor(Math.random() * categories.length)]
        console.log(category)
        const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple&encode=base64&category="+category.toString()); 
        const data = await response.json();
        setQuestion(data.results[0])
        setOptions(mix(data.results[0].incorrect_answers, data.results[0].correct_answer))
    },[count]); 





    function CheckAns(choice, answer){
        setRevealAns(true)
        if(choice==answer){
            console.log( "Correct" );
            setPoints(points+1);
        }
    }

    function next(){ 
        setCount(count+1); 
        setRevealAns(false);
    }

    return (
        <div> 
        
         <h2>Total Score: {points} out of {count} Question</h2>
         
         {tq ? <Question key={count}  category={tq.category} question={tq.question} /> : <div> Loading..</div> }
         
         {options ? <Options options={options} answer={tq.correct_answer} /> : <div>Loading options....</div>}
         
         {revealAns && <div>{atob(tq.correct_answer)}</div> }
         {/* so you can basically hack anything together with as much booleans as you like.. ? */}
         
         {options? !revealAns && <Choices options={options} tq={tq} check={CheckAns} /> : <div>Loading Buttons..</div>}
         
         {revealAns && <button onClick={ ()=> next() }>Next</button>}



        </div>
    )
}


function Choices(props){

    return(
        <div>
            <button onClick={()=> props.check(props.options[0],props.tq.correct_answer)}>A</button>
            <button onClick={()=> props.check(props.options[1],props.tq.correct_answer)}>B</button>
            <button onClick={()=> props.check(props.options[2],props.tq.correct_answer)}>C</button>
            <button onClick={()=> props.check(props.options[3],props.tq.correct_answer)}>D</button>
        </div> 
    )

}


function Options(props){
    return (
        <div>
            <ol type="A">
                {props.options.map(option => (
                    <li>{atob(option)}</li>
                )) }
            </ol>   
        </div>
    )
}


function Question(props){
    return(
        <div>
            <b>{atob(props.question)}</b>
        </div>
    )
}



function mix(incorrect_options_array, answer){
    let options = incorrect_options_array
    let randomIndex = Math.round( (Math.random() * options.length) )
    options.splice(randomIndex, 0, answer)
    return options
}


