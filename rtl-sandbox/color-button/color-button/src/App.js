import { useState } from "react";

export const transformCamelCaseColorNameToSpaced = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
};

const PRIMARY_COLOR = 'mediumVioletRed';
const SECONDARY_COLOR = 'midnightBlue'

function App() {
  const [buttonColor, setButtonColor] = useState(PRIMARY_COLOR);
  const [disabled, setDisabled] = useState(false);
  const toggleButtonDisabled = (e) => {
    setDisabled(e.target.checked);
  };

  const colorToSwitchTo = buttonColor === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR;

  const toggleButtonColor = () => {
    if (disabled)  return;
    setButtonColor(colorToSwitchTo)
  };

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'grey' : buttonColor, color: "white" }}
        onClick={toggleButtonColor}
        disabled={disabled}
      >
        Change to {transformCamelCaseColorNameToSpaced(colorToSwitchTo)}
      </button>
      <br />
      <input
        type="checkbox"
        id="enable-button-checkbox"
        checked={disabled}
        onChange={toggleButtonDisabled}
      />
    </div>
  );
}

export default App;
