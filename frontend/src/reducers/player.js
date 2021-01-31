import * as types from '../constants/ActionTypes'

const player = (state = [], action) => {
  switch (action.type) {
    case types.ADD_PROFILE:
      return action.player
    default:
      return state
  }
}

export default player