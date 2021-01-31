import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from 'theme-ui'

const Boost = ({ dispatch }) => (
  <Button
    bg={"accent"}
    sx={{
      width: '100%'
    }}
    onClick={() => {
      dispatch()
    }}
  >
    <Text
      sx={{
        fontWeight: '700',
        fontSize: '14px'
      }}>
      Boost
        </Text>
  </Button>
)


Boost.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default Boost