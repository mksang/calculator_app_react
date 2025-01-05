import {useState} from 'react'
import Header from './components/Header'
import UserData from './components/UserData'
import Result from './components/Result'

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
const inputIsValid = userInput.duration >= 1
function handleOnChange(inputIdentifier, newValue){
  setUserInput(prevUserInput =>{
    return {...prevUserInput,
    [inputIdentifier] : +newValue
  }})
}
  return (
    <div>
      <Header/>
      <UserData userInputValue={userInput} onChangeInput={handleOnChange}/>
      {!inputIsValid && <p className='center'>Please, input duration greater than zero</p>}
      {inputIsValid && <Result userInputValue={userInput}/>}
    </div>
  )
}
