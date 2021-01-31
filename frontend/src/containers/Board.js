import { connect } from 'react-redux'
import BoardComponent from '../components/Board'

const Board = connect(state => ({
  players: state.players,
  score: state.score,
  }
),{})(BoardComponent)

export default Board