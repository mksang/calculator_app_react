
export default function Calculator({ userInputValue, onChangeInput }) {
    
  return (
    <div className='calculator'>
      <form className='form-container'>
        <div className='form-group'>
          <label htmlFor="input1">INITIAL INVESTMENT</label>
          <input id='input1' type="number" required 
          value={userInputValue.initialInvestment}
          onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="input2">ANNUAL INVESTMENT</label>
          <input id='input2' type="number" required
          value={userInputValue.annualInvestment}
          onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="input3">EXPECTED RETURN</label>
          <input id='input3' type="number" required
          value={userInputValue.expectedReturn}
          onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="input4">DURATION</label>
          <input id='input4' type="number" required
          value={userInputValue.duration}
          onChange={(event) => onChangeInput('duration', event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}
