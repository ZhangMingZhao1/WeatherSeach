import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactPromise from 'redux-promise';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {App} from './components/app';
import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReactPromise)(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App/>
    </Provider>
), document.querySelector('.container'));