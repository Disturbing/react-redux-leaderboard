import React from 'react'
import PropTypes from 'prop-types'
import {  Box, Heading, Badge} from 'theme-ui'
import Boost from "../containers/Boost"

const Profile = ({player}) => (
  <Box
    p={3}
    bg={'muted'}
    mr={2}
    sx={{ borderRadius: '10px'}}
    >
    <Box
      my={2}
      bg={'muted'}
      sx={{ borderRadius: '10px', flexGrow: 1 }}
    >
      <Heading as='h2' mb={2} sx={{ textAlign: 'center'}}>
        { player.name }
      </Heading>
      <Badge bg="darken" px={2} py={1} mb={2}>{ `ID: ${player.uid}` }</Badge>
    </Box>
    <Boost/>
  </Box>
)

Profile.propTypes = {
  player: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  )
}

export default Profile;