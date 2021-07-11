import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SimpleQAForm = (props) => {

  const [month, setMonth] = useState(Math.floor(Math.random() * 12));
  const months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
  const [answer, setAnswer] = useState('');
  const [output, setOutput] = useState('');

  const selectRandomMonth = () => {
    let randomMonth = Math.floor(Math.random() * 12);
    
    setMonth(randomMonth);
  }

  const checkAnswer = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (answer.toLowerCase() === months[(month+1)%12].toLowerCase()) {
      console.log('correct')
      setAnswer('');
      selectRandomMonth();
      setOutput('Correct answer')
    } else {
      setOutput('Incorrent answer, try again')
    }
    return false;
  }

  const onChange = (event) => {
    setAnswer(event.target.value);
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding:'25px'
    }}>
      <Card className="text-center" style={{width:'510px'}}>
        <Card.Header as="h5">What month is after {months[month]}?</Card.Header>
        <Card.Body>
          <Form onSubmit={checkAnswer}>
            <Form.Group className="mb-3" controlId="form">
              <Form.Control type="text" placeholder="Month" value={answer} onChange={onChange} list='months'/>
            </Form.Group>
            <Button type="submit"> Check </Button>
          </Form>
          <Card.Text style={{ fontWeight: "bold", whitespace: "pre-wrap" }}>
            <p></p>
            {output}
          </Card.Text>
        </Card.Body>
      </Card>

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
    </div>
  );
}

export default SimpleQAForm;
