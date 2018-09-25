import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class extends React.Component {
    render() {
        const { character } = this.props
        const image = character && character.image_dir ? { uri: character.image_dir } : null
        return (
            <View style={styles.container} >
                <Image source={image} resizeMode={'cover'} style={styles.image} />
            </View>
        )
    }
}