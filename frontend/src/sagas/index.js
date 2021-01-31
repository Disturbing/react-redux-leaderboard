import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

//Change to handle Boost
const handleBoost = function* handleBoost(params) {
	yield takeEvery(types.BOOST, (action) => {
		params.socket.send(JSON.stringify(action))
	})
}

export default handleBoost