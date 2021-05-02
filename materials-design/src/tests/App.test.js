import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import {BrowserRouter} from 'react-router-dom'
test('Renders React app', () => {
  const { getByText } = render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  );

});
