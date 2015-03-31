// IMPORTANT: This needs to be first to get around CSS order
// randomness in webpack.
require('./reset.css');
require('./base.sass');

import React from 'react';
import Application from './Application';

React.render(<Application />, document.getElementById('app'));
