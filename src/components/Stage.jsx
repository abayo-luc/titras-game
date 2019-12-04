import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';
export default ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row =>
      row.map((cell, index) => <Cell key={index} type={cell[0]} />)
    )}
  </StyledStage>
);
