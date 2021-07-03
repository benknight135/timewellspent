import { render, screen } from '@testing-library/react';
import TTTGame from './TTTGame';
import LogoBounce from './LogoBounce';

test('renders all app modules', () => {
  render(
    <div>
      <TTGame />
      <LogoBounce />
    </div>
  );
});