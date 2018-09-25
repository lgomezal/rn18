import * as types from './types'

function setFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    }
}

export function setList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.CHARACTERS_SET_ITEM,
        value
    }
}

export function fetchCharactersList() {
    return (dispatch, getState, api) => {
        const house = getState().houses.item
        if (!house) {
            return
        }
        dispatch(setList([]))
        dispatch(setFetching(true))
        api
            .fetchCharacters(house.id)
            .then(res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.records))
            })
            .catch(err => {
                dispatch(setFetching(false))
                console.log('fetchCharacters error: ', err)
            })
    }
}