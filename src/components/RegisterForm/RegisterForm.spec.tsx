import React from 'react';
import ReactDOM from 'react-dom';

import RegisterForm from './RegisterForm';

it('RegisterForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterForm />, div);
});
