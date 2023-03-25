import React, { useState } from 'react'

function SummaryForm() {

    const [disabled, setDisabled] = useState(false);
    
    const checkboxHandler = (event) => {
        setDisabled(event.target.checked);
    }
    
  return (
    <div>
        <input
        id='checkbox1'
        type="checkbox"
        defaultChecked={disabled}
        onClick={checkboxHandler}
        />
        <label htmlFor='checkbox1'>checkbox</label>
        <button disabled={!disabled}>button</button>
    </div>
  )
}

export default SummaryForm