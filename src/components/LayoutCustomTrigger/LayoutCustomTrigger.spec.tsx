import React from 'react';
import ReactDOM from 'react-dom';
import LayoutCustomTrigger from './LayoutCustomTrigger';

it('LayoutCustomTrigger renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayoutCustomTrigger />, div);
});
