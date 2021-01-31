import { Container, Box, Divider, Flex, Heading } from 'theme-ui'
import Board from "./containers/Board"
import Profile from "./containers/Profile"

const App = () => (
    <Box p={3}>
      <Container>
      < Box>
          <Heading as="h5">Open new tab to add player. Click Boost to add point.</Heading>
        </Box>
        <Divider my={3}/>
        <Flex sx={{ alignItems: 'flex-start'}}>
          <Profile />
          <Board />
        </Flex>
      </Container>
    </Box>
  );
  
export default App;
