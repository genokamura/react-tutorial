import React from 'react';
import { render } from '@testing-library/react';
import Game from '../Game';

describe('App renders Game', () => {
  test('App', () => {
    render(<Game />);
  });
});
