import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Characters extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>PERSONAJES</Text>
            </View>
        )
    }
}