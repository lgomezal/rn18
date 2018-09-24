import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { HouseCell } from '../../widgets'
import * as api from '../../../api/'
import styles from './styles'

export default class Houses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            housesList: [],
            selected: null,
        }
    }

    componentWillMount() {
        this._fetchHousesList()
    }

    _fetchHousesList() {
        api.fetchHouses().then(response => {
            //console.log('fetchHouses response: ', response)
            if (response && response.data && response.data.records) {
                this.setState({ housesList: response.data.records })
            }
        }).catch(error => {
            console.log('fetchHouses error: ', error)
            this.setState({ housesList: [] })
        })
    }

    _onHouseTapped(house) {
        //Alert.alert('Casa:', house.nombre)
        this.setState({ selected: house })
    }

    _renderItem({ item }) {
        return (
            <HouseCell
                house={item}
                onHousePress={(v) => this._onHouseTapped(v)}
                selected={this.state.selected}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.housesList}
                    renderItem={value => this._renderItem(value)}
                    keyExtractor={(item, i) => 'cell' + item.id}
                    extraData={this.state.selected}
                    numColumns={2}
                    style={{ paddingTop: 40 }}
                />
            </View>
        )
    }
}

