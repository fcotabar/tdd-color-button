import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z]\B)/g, ' $1').toLowerCase();
};

function App() {
  const [disabledButton, setDisabledButton] = useState(false);
  const [colorButton, setColorButton] = useState('red');
  const newColorButton = colorButton === 'red' ? 'blue' : 'red';

  const handleChangeButtonColor = (e) => {
    e.preventDefault();

    setColorButton(newColorButton);
  };

  return (
    <>
      <div>
        <button
          onClick={handleChangeButtonColor}
          style={{ backgroundColor: !disabledButton ? colorButton : 'gray' }}
          disabled={disabledButton}
        >
          Change to {newColorButton}
        </button>
        <input
          id="disable-button-checkbox"
          defaultChecked={disabledButton}
          aria-checked={disabledButton}
          onClick={() => setDisabledButton(!disabledButton)}
          type="checkbox"
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </>
  );
}

export default App;
