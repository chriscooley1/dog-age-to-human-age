import React, { useState } from "react";

// Function to calculate human age equivalent from dog age
const calculateHumanAge = (dogAge: number): number => {
  return Math.round(16 * Math.log(dogAge) + 31);
};

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

  // Function to calculate human age based on dog age
  const calculateAge = (): void => {
    // Check if dog age is a valid number
    if (typeof dogAge === "number" && !isNaN(dogAge)) {
      const age = calculateHumanAge(dogAge); // Calculate human age
      setHumanAge(age); // Update human age state
    } else {
      setHumanAge(null); // Set human age state to null if dog age is invalid
    }
  };

  return (
    <div className="calculator">
      <h2>How Old am I?</h2>
      {/* Form for entering dog age and displaying calculated human age */}
      <form onSubmit={(e) => {e.preventDefault(); calculateAge();}}>
        <div className="input-group">
          <label htmlFor="dogAge">Age in dog years</label>
          <input
            type="number"
            id="dogAge"
            value={dogAge !== undefined ? dogAge : ""}
            placeholder="Enter dog age in years"
            onChange={handleDogAgeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display the calculated human age if available */}
      {humanAge !== null && (
        <p>But in human years I am {humanAge} years old!</p>
      )}
    </div>
  );
};

export default Calculator;
