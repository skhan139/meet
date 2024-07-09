
import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [numberInput, setNumberInput] = useState(32);

    const handleInputChange = (e) => {
        setNumberInput(e.target.value);
        if (setCurrentNOE) {
            setCurrentNOE(e.target.value);
        }
        let numberText;
        if (isNaN(e.target.value) || e.target.value <= 0) {
            numberText = "Only positive numbers are allowed"
        }

        else {
            numberText = ""
        }
        setErrorAlert(numberText);
    };

    return (
       <div id="number-of-events">
           <label htmlFor="event-number-input">Number of Events:</label>
           <input role="textbox"
               type="number"
               id="event-number-input"
               name="eventNumberInput"
               value={numberInput}
               onChange={handleInputChange}
               data-testid="event-number-input"
           />
       </div>
   );
};
export default NumberOfEvents;