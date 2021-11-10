import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from './components/TodoTable';

// Default test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Multiply example
const multiply = (x, y) => {
  return x * y; 
}
test('test 2 * 3', () => {
  expect(multiply(2, 3)).toBe(6);
});

// React link default test that was not present 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Table test
test('renders todotable', () => {
  const row = [{ desc: 'Go to coffee', date: '24.01.2021' }];
  render(<TodoTable todos={row} />);
  const tablecell = screen.getByText(/go to coffee/i);
  expect(tablecell).toBeInTheDocument();
});