import { connect } from 'react-redux'
import ProfileComponent from '../components/Profile'

const Profile = connect(state => {
 return {
  player: state.player,
  }

},{})(ProfileComponent)

export default Profile