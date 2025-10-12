// Img.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

test('Img is visible', () => {
  render(<Img alt="Sample" />);
  expect(screen.getByRole('img', { name: /sample/i })).toBeVisible();
});

test('Disabled Img wrapper background changes', () => {
  render(<Img alt="Disabled" disabled />);
  const wrap = screen.getByTestId('img-wrap');
  expect(wrap).toHaveAttribute('aria-disabled', 'true');
});
