import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

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

test('button turns blue when clicked', () => {});
