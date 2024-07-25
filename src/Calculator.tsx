import React, { useState } from "react";
import "./Calculator.css";

// Function to calculate dog age equivalent from human age
const calculateDogAge = (humanAge: number): number => {
  return Math.round(16 * Math.log(humanAge) + 31);
};

const Calculator: React.FC = () => {
  // State variables for human age and calculated human age
  const [humanAge, sethumanAge] = useState<number | string>("");
  const [dogAGE, setdogAGE] = useState<number | null>(null);

  // Handler for changes in the human age input field
  const handlehumanAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newhumanAge = event.target.value;
    if (newhumanAge === "") {
      sethumanAge("");
    } else {
      sethumanAge(Number(newhumanAge));
    }
  };

  // Function to calculate dog age based on human age
  const calculateAge = (): void => {
    // Check if human age is a valid number
    if (typeof humanAge === "number" && !isNaN(humanAge)) {
      const age = calculateDogAge(humanAge); // Calculate dog age
      setdogAGE(age); // Update dog age state
    } else {
      setdogAGE(null); // Set dog age state to null if human age is invalid
    }
  };

  return (
    <div className="calculator">
      <h2>How Old am I?</h2>
      {/* Form for entering human age and displaying calculated dog age */}
      <form onSubmit={(e) => {e.preventDefault(); calculateAge();}}>
        <div className="input-group">
          <label htmlFor="humanAge">Age in human years</label>
          <input
            type="number"
            id="humanAge"
            value={humanAge !== undefined ? humanAge : ""}
            placeholder="Enter dog age in years"
            onChange={handlehumanAgeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display the calculated dog age if available */}
      {dogAGE !== null && (
        <p>But in dog years I am {dogAGE} years old!</p>
      )}
    </div>
  );
};

export default Calculator;
