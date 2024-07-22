import React, { useState } from "react";

const Calculator: React.FC = () => {
  // State variables for dog age and calculated human age
  const [dogAge, setDogAge] = useState<number | string>("");
  const [humanAge, setHumanAge] = useState<number | null>(null);

  // Handler for changes in the dog age input field
  const handleDogAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newDogAge = event.target.value;
    if (newDogAge === "") {
      setDogAge("");
    } else {
      setDogAge(Number(newDogAge));
    }
  };

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
