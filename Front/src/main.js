import React from 'react';
import { render } from 'react-dom';

import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/css/font.css';
import './assets/css/style.css';

import Main from './containers/Main';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
document.title = 'Home Page';

render(<Main />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./store', () => {
    render(<Main />, document.getElementById('root'));
  });
}
