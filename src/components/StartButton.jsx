import React from 'react';
import { StyledButton } from './styles/StyledButton';
export default ({ callback }) => (
  <StyledButton onClick={callback}>Start Game</StyledButton>
);
