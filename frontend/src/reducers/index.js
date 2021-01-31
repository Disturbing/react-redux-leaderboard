import { combineReducers } from "redux"
import players from "./players"
import player from "./player"

const chat = combineReducers({
	players,
	player
});

export default chat