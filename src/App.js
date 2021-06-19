import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  const [month, setMonth] = useState(Math.floor(Math.random() * 12));
  const months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
  const [answer, setAnswer] = useState('');
  const [output, setOutput] = useState(<p></p>)

  const selectRandomMonth = () => {
    let randomMonth = Math.floor(Math.random() * 12);
    
    setMonth(randomMonth);
  }

  const checkAnswer = (event) => {
    event.preventDefault() 
    if (answer.toLowerCase() === months[(month+1)%12].toLowerCase()) {
      console.log('correct')
      setAnswer('');
      selectRandomMonth();
      setOutput( <p> Correct answer</p>)
    } else {
      setOutput( <p> Incorrent answer, try again</p>)
    }
    return false;
  }

  const onChange = (event) => {
    setAnswer(event.target.value);
  }

  return (
    <div>
      <h3> What month is after {months[month]}? </h3>
      <form onSubmit={checkAnswer}>
        <input type='text' value={answer} onChange={onChange} list='months'></input>
        <datalist id='months'>
          <option value="January"/>
          <option value="Feburary"/>
          <option value="March"/>
          <option value="April"/>
          <option value="May"/>
          <option value="June"/>
          <option value="July"/>
          <option value="August"/>
          <option value="September"/>
          <option value="October"/>
          <option value="November"/>
          <option value="December"/>
        </datalist>
        <button type="submit">Check</button>
      </form>
      {output}
    </div>
  );
}

export default App;
