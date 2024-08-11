import 'bootstrap/dist/css/bootstrap.min.css';
import './ShutTheBox.css';
import React, { useState } from 'react';
import {Button, Spinner, Modal} from 'react-bootstrap'

function ShutTheBox() {

  const [two, setTwo] = useState(2)
  const [three, setThree] = useState(3)
  const [four, setFour] = useState(4)
  const [five, setFive] = useState(5)
  const [six, setSix] = useState(6)
  const [seven, setSeven] = useState(7)
  const [eight, setEight] = useState(8)
  const [nine, setNine] = useState(9)
  const [ten, setTen] = useState(10)
  /*
  const [eleven, setEleven] = useState(11)
  const [twelve, setTwelve] = useState(12)
  */

  const maxDiceValue = 6
  const minDiceValue = 1

  const [dice1, setDice1] = useState(0)
  const [dice2, setDice2] = useState(0)

  const [rolling, setRolling] = useState(false)

  const [currentValue, setCurrentValue] = useState(0)
  const [hasPossibleCombination, setHasPossibleCombination] = useState(true);
  const [score, setScore] = useState(0)

  const handleDiceRoll = () => {
    setRolling(true)
    setTimeout(() => {
      let result1 = (Math.floor(Math.random() * (maxDiceValue - minDiceValue + 1)) + minDiceValue)
      let result2 = (Math.floor(Math.random() * (maxDiceValue - minDiceValue + 1)) + minDiceValue)

      setDice1(result1)
      setDice2(result2)

      let currentValue = result1 + result2
      setCurrentValue(currentValue)

      setRolling(false)

      let numbers = []
      if (two > 0) numbers.push(two);
      if (three > 0) numbers.push(three);
      if (four > 0) numbers.push(four);
      if (five > 0) numbers.push(five);
      if (six > 0) numbers.push(six);
      if (seven > 0) numbers.push(seven);
      if (eight > 0) numbers.push(eight);
      if (nine > 0) numbers.push(nine);
      if (ten > 0) numbers.push(ten);
      /*
      if (eleven > 0) numbers.push(eleven);
      if (twelve > 0) numbers.push(twelve);
      */

      console.log(numbers)
      console.log("Current value " + currentValue)

    setTimeout(() => {

      let combinations = [];
      for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === currentValue) {
            combinations.push([numbers[i], numbers[j]]);
          }
        }
      }

      if (combinations.length > 0) {
        setHasPossibleCombination(true);
        console.log("Combination found")
      } else if (numbers.includes(currentValue)) {
        setHasPossibleCombination(true);
        console.log("Combination found - same number")
      } else {
        setHasPossibleCombination(false);
        console.log("No combination found")
      }
    }, 100);

    
  }, 400);
}

const handleNewGame = () => {
  window.location.reload()
}

  const handleSelectNumber = (number) => {
    setScore(score + 1)
    console.log(score)

    switch (number) {
      case 2:
        setCurrentValue(currentValue - 2);
        setTwo(0);
        break
      case 3:
        setCurrentValue(currentValue - 3)
        setThree(0)
        break
      case 4:
        setCurrentValue(currentValue - 4)
        setFour(0)
        break
      case 5:
        setCurrentValue(currentValue - 5)
        setFive(0)
        break
      case 6:
        setCurrentValue(currentValue - 6)
        setSix(0)
        break
      case 7:
        setCurrentValue(currentValue - 7)
        setSeven(0)
        break
      case 8:
        setCurrentValue(currentValue - 8)
        setEight(0)
        break
      case 9:
        setCurrentValue(currentValue - 9)
        setNine(0)
        break
      case 10:
        setCurrentValue(currentValue - 10)
        setTen(0)
        break
        /*
      case 11:
        setCurrentValue(currentValue - 11)
        setEleven(0)
        break
      case 12:
        setCurrentValue(currentValue - 12)
        setTwelve(0)
        */
    }
  }


  return (
    <div className="ShutTheBox">
      <h1>SHUT THE BOX!</h1>
      <div className="Content">
      <div className="NumberButtons">
        <Button className="NumberButton" variant={two ? "warning" : "success"} size="lg" disabled={currentValue < 2 || !two} onClick={() => handleSelectNumber(2)}>{two ? ("2") : ("✓")}</Button>
        <Button className="NumberButton" variant={three ? "warning" : "success"} size="lg" disabled={currentValue < 3 || !three} onClick={() => handleSelectNumber(3)}>{three ? ("3") : ("✓")}</Button>
        <Button className="NumberButton" variant={four ? "warning" : "success"} size="lg" disabled={currentValue < 4 || !four} onClick={() => handleSelectNumber(4)}>{four ? ("4") : ("✓")}</Button>
        <Button className="NumberButton" variant={five ? "warning" : "success"} size="lg" disabled={currentValue < 5 || !five} onClick={() => handleSelectNumber(5)}>{five ? ("5") : ("✓")}</Button>
        <Button className="NumberButton" variant={six ? "warning" : "success"} size="lg" disabled={currentValue < 6 || !six} onClick={() => handleSelectNumber(6)}>{six ? ("6") : ("✓")}</Button>
        <Button className="NumberButton" variant={seven ? "warning" : "success"} size="lg" disabled={currentValue < 7 || !seven} onClick={() => handleSelectNumber(7)}>{seven ? ("7") : ("✓")}</Button>
        <Button className="NumberButton" variant={eight ? "warning" : "success"} size="lg" disabled={currentValue < 8 || !eight} onClick={() => handleSelectNumber(8)}>{eight ? ("8") : ("✓")}</Button>
        <Button className="NumberButton" variant={nine ? "warning" : "success"} size="lg" disabled={currentValue < 9 || !nine} onClick={() => handleSelectNumber(9)}>{nine ? ("9") : ("✓")}</Button>
        <Button className="NumberButton" variant={ten ? "warning" : "success"} size="lg" disabled={currentValue < 10 || !ten} onClick={() => handleSelectNumber(10)}>{ten ? ("10") : ("✓")}</Button>
        {/*<Button className="NumberButton" variant={eleven ? "warning" : "success"} size="lg" disabled={currentValue < 11 || !eleven} onClick={() => handleSelectNumber(11)}>{eleven ? ("11") : ("✓")}</Button>
        <Button className="NumberButton" variant={twelve ? "warning" : "success"} size="lg" disabled={currentValue < 12 || !twelve} onClick={() => handleSelectNumber(12)}>{twelve ? ("12") : ("✓")}</Button>
        */}
        </div>
      <div className="DiceButtons">
          <br/>
        <Button className="DiceButton" variant="light" size="lg">{rolling ? (<Spinner/>):(<h2>{dice1}</h2>)}</Button>
        <Button className="DiceButton" variant="light">{rolling ? (<Spinner/>):(<h2>{dice2}</h2>)}</Button>
        <br/>
      </div>
        <Button className="RollButton" variant="info" disabled={currentValue !== 0} onClick={() => handleDiceRoll()}><h3>Roll!</h3></Button>
      </div>

        <Modal show={!hasPossibleCombination} centered className="Modal" data-bs-theme="dark">
        <Modal.Header as="h1">
          <Modal.Title>You lost!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Score: {score}/9</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleNewGame} >
            Play again!
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={two + three + four + five + six + seven + eight + nine + ten === 0} centered className="Modal">
        <Modal.Header as="h1">
          <Modal.Title>You won!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulation! Score: {score}/9</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleNewGame} >
            Play again!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShutTheBox;