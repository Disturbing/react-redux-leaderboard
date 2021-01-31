import React from 'react'
import PropTypes from 'prop-types'
import { Card, Box, Flex, Text } from 'theme-ui'

const Board = ({ players }) => (
  <Box
    px={3}
    pt={3}
    bg={'muted'}
    sx={{ borderRadius: '10px', flexGrow: 1 }}
  >
    {
      players.map((player, key) => (
          <Card
            variant={(key)? 'normal' : 'top'}
            key={key}
            mb={3}
            py={2}
            px={4}
            sx={{ borderRadius: '8px' }}
          >
          
            <Flex color={"#fff"} sx={{ flexWrap: 'wrap'}}>
            <Text>Rank: {key + 1}</Text>
            <Text ml={4}>{player.name}</Text>
            <Text ml={'auto'}>Score: {player.score}</Text>
            </Flex>
          </Card>
      ))
    }
  </Box>
)

Board.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
}

export default Board;