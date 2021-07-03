import { render, screen } from '@testing-library/react';
import TicTac from './TicTac';

test('renders tic tac toe game', () => {
  render(
    <TicTac />
  );
});