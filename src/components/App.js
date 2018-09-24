import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import { configureAxios } from '../api'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../redux'
const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default class App extends Component {

    componentWillMount() {
        configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key='root'>
                        <Scene key='houses' component={Houses} hideNavBar={true} initial={true} />
                        <Scene key='characters' component={Characters} />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}