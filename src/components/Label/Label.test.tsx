import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("Label is visible", () => {
  render(<Label>Email</Label>);
  expect(screen.getByText(/email/i)).toBeVisible();
});

test("Disabled label still renders", () => {
  render(<Label disabled>Disabled Label</Label>);
  const lbl = screen.getByText(/disabled label/i);
  expect(lbl).toBeVisible();
});
