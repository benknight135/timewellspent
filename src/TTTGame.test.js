import { render, screen } from '@testing-library/react';
import TTTGame from './TTTGame';

test('renders tic tac toe game', () => {
  render(
    <TTTGame />
  );
});