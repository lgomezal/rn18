import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import { configureAxios } from '../api'

export default class App extends Component {

    componentWillMount() {
        configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Router>
                <Stack key='root'>
                    <Scene key='houses' component={Houses} hideNavBar={true} initial={true} />
                    <Scene key='characters' component={Characters} />
                </Stack>
            </Router>
        )
    }
}