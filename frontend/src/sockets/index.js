import *  as types from '../constants/ActionTypes'
import {addProfile, populatePlayerList} from '../actions'

const setupSocket = (dispatch, username) => {
	const socket = new WebSocket('ws://localhost:9000')
	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: types.ADD_PLAYER,
			name: username
		}))
	}

	socket.onmessage = (event) => {
		const data = JSON.parse(event.data)
		switch (data.type) {
			case types.PLAYERS_LIST:
				dispatch(populatePlayerList(data.players))
				break
			case types.ADD_PROFILE:
				dispatch(addProfile(data.player))
				break
			default:
				break
		}
	}
	return socket
}

export default setupSocket