import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial text and color', () => {
  render(<App />);
  // // console.log(ren);
  // const linkElement = screen.getByRole('link', { name: /learn react/i });
  // // console.log(linkElement);
  // expect(linkElement).toBeInTheDocument();

  // Find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // expect color to be red
  expect(colorButton).toHaveStyle('background-color: red');

  // click button
  fireEvent.click(colorButton);

  // expect the background button to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // Check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  // Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Change button color and checbox disable button on first click and enable on second clicks', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

describe('Spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('red')).toBe('red');
  });
  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('violetBlue')).toBe('violet blue');
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('mediumVioletRed')).toBe('medium violet red');
  });
});
