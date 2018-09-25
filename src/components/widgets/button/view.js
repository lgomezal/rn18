import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        label: 'Guardar',
        onPress: () => { },
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>{this.props.label}</Text>
            </ TouchableOpacity>
        )
    }
}
