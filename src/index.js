import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<App />, document.getElementById('root'));
