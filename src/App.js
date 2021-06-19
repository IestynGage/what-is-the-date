import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [month, setMonth] = useState(Math.floor(Math.random() * 12));
  const months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
  const [answer, setAnswer] = useState('');
  const [output, setOutput] = useState(<p></p>)

  function selectRandomMonth() {
    let randomMonth = Math.floor(Math.random() * 12);
    
    setMonth(randomMonth);
  }

  function checkAnswer() {
    if (answer.toLowerCase() === months[(month+1)%12].toLowerCase()) {
      console.log('correct')
      setAnswer('');
      selectRandomMonth();
      setOutput( <p> Correct answer</p>)
    } else {
      setOutput( <p> Incorrent answer, try again</p>)
    }

  }

  function onChange(event){
    setAnswer(event.target.value);
  }

  return (
    <div>
      <p> What month is after {months[month]}? </p>
      <input type="text" value={answer} onChange={onChange}></input>
      <button onClick={() => checkAnswer()}>Check</button>
      {output}
    </div>
  );
}

export default App;
