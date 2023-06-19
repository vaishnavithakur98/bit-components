import React from 'react';
import { render } from '@testing-library/react';
import { BasicBuilder } from './builder.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBuilder />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
