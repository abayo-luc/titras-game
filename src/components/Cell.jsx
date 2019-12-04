import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../helpers/tratrominos';

export default ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);
