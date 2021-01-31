import * as types from '../constants/ActionTypes'

const players = (state = [], action) => {
	switch (action.type) {
		case types.PLAYERS_LIST:
			return action.players
		default:
			return state
	}
}

export default players