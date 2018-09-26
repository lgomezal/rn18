import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'
import * as Colors from '../../../commons/colors'

export default class extends Component {

    staticDefaultProps = {
        label: '',
        value: '',
        placeholder: '',
        onChangeText: () => { },
        inputStyle: {},
        labelStyle: {},
        containerStyle: {},
    }

    render() {
        return (
            <View style={[this.props.containerStyle]}>
                <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                <TextInput
                    onChangeText={v => this.props.onChangeText(v)}
                    value={this.props.value}
                    style={[styles.textInput, this.props.inputStyle]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={Colors.main}
                />
            </View>
        )
    }
}