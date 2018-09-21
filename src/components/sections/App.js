import React, { Component } from 'react'
import { View } from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'blue'
        }
    }

    componentDidMount() {
        this.setState({
            backgroundColor: 'red',
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.state.backgroundColor }}>

            </View>
        )
    }
}