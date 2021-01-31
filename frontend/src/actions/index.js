import * as types from '../constants/ActionTypes'

export const boost = () => ({
	type: types.BOOST,
})

export const addProfile = player => ({
	type: types.ADD_PROFILE,
	player
})

export const populatePlayerList = players => ({
	type: types.PLAYERS_LIST,
	players
})