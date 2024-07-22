import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [dogAge, setDogAge] = useState("");

  return (
    <>
      <form>
        <div>
          <label htmlFor="dogAge">Dog Age</label>
          <input
            type="number"
            id="dogAge"
            value={dogAge}
            placeholder="Enter dog age in years"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setDogAge(event.target.value)}
          />
        </div>
      </form>
    </>
  )
}
export default Calculator;
