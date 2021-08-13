import React from 'react';

import { Board } from './components';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Board />
    </Container>
  );
}

export default App;