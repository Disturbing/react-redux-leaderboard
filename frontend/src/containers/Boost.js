

import { connect } from 'react-redux'
import BoostComponent from '../components/Boost'
import { boost } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: () => {
    dispatch(boost())
  }
})

const Boost = connect(()=>({}), mapDispatchToProps)(BoostComponent)

export default Boost;