import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {combineReducers,createStore, authStateReducer} from './src/screens/login';

const reducers=combineReducers({
authState:authStateReducer
}),
store=createStore(reducers),
appRootComponent= () =>(<Proivder store={store}><App/></Proivder>)
AppRegistry.registerComponent('project', () =>appRootComponent);
