import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button is visible", () => {
  render(<Button>Test Button</Button>);
  expect(screen.getByRole("button", { name: /test button/i })).toBeVisible();
});

test("Disabled button works correctly", () => {
  render(<Button disabled>Disabled</Button>);
  const btn = screen.getByRole("button", { name: /disabled/i });
  expect(btn).toBeDisabled();
});
