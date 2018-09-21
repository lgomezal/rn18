import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class Houses extends Component {

    gotoCharacters() {
        Actions.characters({ title: 'Personajes' })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>CASAS</Text>

                <Button
                    title={'Pulsar para ir a Characters'}
                    color={'lime'}
                    onPress={() => this.gotoCharacters()}
                />
            </View>
        )
    }
}