// RadioButton.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

test('Radio button is visible', () => {
  render(<RadioButton label="Pick me" name="x" value="y" />);
  expect(screen.getByLabelText(/pick me/i)).toBeVisible();
});

test('Disabled radio button works and accessible', () => {
  render(<RadioButton label="Disabled" name="x" value="y" disabled />);
  const container = screen.getByTestId('radio-container');
  const input = screen.getByLabelText(/disabled/i);

  expect(input).toBeDisabled();
  expect(container).toHaveAttribute('aria-disabled', 'true');
});
