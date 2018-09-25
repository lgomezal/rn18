import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'
import { CharacterCell } from '../../widgets'

class Characters extends Component {

    componentDidMount() {
        this.props.fetchCharactersList()
    }

    _renderItem(item, index) {
        return <CharacterCell character={item} />
    }

    render() {
        const { list, isFetching } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    keyExtractor={(item, i) => 'character' + i}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.characters.isFetching,
        list: state.characters.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)