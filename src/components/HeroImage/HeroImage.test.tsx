// HeroImage.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroImage from "./HeroImage";

test("HeroImage is visible", () => {
  render(<HeroImage title="Hello" />);
  expect(screen.getByText(/hello/i)).toBeVisible();
});

test("Disabled HeroImage background changes", () => {
  render(<HeroImage title="Disabled" disabled />);
  const hero = screen.getByTestId("hero");
  expect(hero).toHaveAttribute("aria-disabled", "true");
});
