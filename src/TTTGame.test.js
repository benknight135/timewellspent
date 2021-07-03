import { render, screen } from '@testing-library/react';
import TTGame from './TTGame';

test('renders tic tac toe game', () => {
  render(
    <TTGame />
  );
});