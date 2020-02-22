import React from 'react';
import { render } from '@testing-library/react';
import Lib from './index.tsx';

// hello
test('renders learn react link', () => {
  const { getByText } = render(<Lib />);
  const linkElement = getByText(/HELLO/i);
  expect(linkElement).toBeInTheDocument();
});
