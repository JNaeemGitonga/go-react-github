import React from 'react';
import Login from '../index';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});