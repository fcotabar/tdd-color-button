import { useState } from 'react';
import './App.css';

function App() {
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
          style={{ backgroundColor: colorButton }}
        >
          Change to {newColorButton}
        </button>
      </div>
    </>
  );
}

export default App;
