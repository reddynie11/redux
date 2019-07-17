import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
//import reducer
import reducer from './reducer/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>  
        <App />
    </Provider>, document.getElementById('root'));
