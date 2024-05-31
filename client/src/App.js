import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import {Button, Spinner} from 'react-bootstrap'

function App() {

  const [two, setTwo] = useState(true)
  const [three, setThree] = useState(true)
  const [four, setFour] = useState(true)
  const [five, setFive] = useState(true)
  const [six, setSix] = useState(true)
  const [seven, setSeven] = useState(true)
  const [eight, setEight] = useState(true)
  const [nine, setNine] = useState(true)
  const [ten, setTen] = useState(true)
  const [eleven, setEleven] = useState(true)
  const [twelve, setTwelve] = useState(true)

  const maxDiceValue = 6
  const minDiceValue = 1

  const [dice1, setDice1] = useState(0)
  const [dice2, setDice2] = useState(0)

  const [rolling, setRolling] = useState(false)

  const [currentValue, setCurrentValue] = useState(null)

  const handleDiceRoll = () => {
    setRolling(true)
    setTimeout(() => {
      let result1 = (Math.floor(Math.random() * (maxDiceValue - minDiceValue + 1)) + minDiceValue)
      let result2 = (Math.floor(Math.random() * (maxDiceValue - minDiceValue + 1)) + minDiceValue)

      setDice1(result1)
      setDice2(result2)

      setCurrentValue(result1 + result2)

      setRolling(false)
    }, 2000);
  }

  const handleSelectNumber = (number) => {
    switch (number) {
      case 2:
        setCurrentValue(currentValue - 2);
        setTwo(false);
        break
      case 3:
        setCurrentValue(currentValue - 3)
        setThree(false)
        break
      case 4:
        setCurrentValue(currentValue - 4)
        setFour(false)
        break
      case 5:
        setCurrentValue(currentValue - 5)
        setFive(false)
        break
      case 6:
        setCurrentValue(currentValue - 6)
        setSix(false)
        break
      case 7:
        setCurrentValue(currentValue - 7)
        setSeven(false)
        break
      case 8:
        setCurrentValue(currentValue - 8)
        setEight(false)
        break
      case 9:
        setCurrentValue(currentValue - 9)
        setNine(false)
        break
      case 10:
        setCurrentValue(currentValue - 10)
        setTen(false)
        break
      case 11:
        setCurrentValue(currentValue - 11)
        setEleven(false)
        break
      case 12:
        setCurrentValue(currentValue - 12)
        setTwelve(false)
    }
  }


  return (
    <div>
        <Button variant={two ? "warning" : "success"} size="lg" disabled={currentValue < 2 || !two} onClick={() => handleSelectNumber(2)}>{two ? ("2") : ("✔")}</Button>
        <Button variant={three ? "warning" : "success"} size="lg" disabled={currentValue < 3 || !three} onClick={() => handleSelectNumber(3)}>{three ? ("3") : ("✔")}</Button>
        <Button variant={four ? "warning" : "success"} size="lg" disabled={currentValue < 4 || !four} onClick={() => handleSelectNumber(4)}>{four ? ("4") : ("✔")}</Button>
        <Button variant={five ? "warning" : "success"} size="lg" disabled={currentValue < 5 || !five} onClick={() => handleSelectNumber(5)}>{five ? ("5") : ("✔")}</Button>
        <Button variant={six ? "warning" : "success"} size="lg" disabled={currentValue < 6 || !six} onClick={() => handleSelectNumber(6)}>{six ? ("6") : ("✔")}</Button>
        <Button variant={seven ? "warning" : "success"} size="lg" disabled={currentValue < 7 || !seven} onClick={() => handleSelectNumber(7)}>{seven ? ("7") : ("✔")}</Button>
        <Button variant={eight ? "warning" : "success"} size="lg" disabled={currentValue < 8 || !eight} onClick={() => handleSelectNumber(8)}>{eight ? ("8") : ("✔")}</Button>
        <Button variant={nine ? "warning" : "success"} size="lg" disabled={currentValue < 9 || !nine} onClick={() => handleSelectNumber(9)}>{nine ? ("9") : ("✔")}</Button>
        <Button variant={ten ? "warning" : "success"} size="lg" disabled={currentValue < 10 || !ten} onClick={() => handleSelectNumber(10)}>{ten ? ("10") : ("✔")}</Button>
        <Button variant={eleven ? "warning" : "success"} size="lg" disabled={currentValue < 11 || !eleven} onClick={() => handleSelectNumber(11)}>{eleven ? ("11") : ("✔")}</Button>
        <Button variant={twelve ? "warning" : "success"} size="lg" disabled={currentValue < 12 || !twelve} onClick={() => handleSelectNumber(12)}>{twelve ? ("12") : ("✔")}</Button>
          <br/>
        <Button variant="light">{rolling ? (<Spinner/>):(<h1>{dice1}</h1>)}</Button>
        <Button variant="light">{rolling ? (<Spinner/>):(<h1>{dice2}</h1>)}</Button>
        <br/>
        <Button variant="info" disabled={!currentValue == 0} onClick={() => handleDiceRoll()}>Roll!</Button>
    </div>
  );
}

export default App;
