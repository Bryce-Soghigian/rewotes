import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import {BrowserRouter} from 'react-router-dom'
import Home from '../components/Home/Home';
test('Renders Home Component', () => {
  render(
    <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
  );

});
