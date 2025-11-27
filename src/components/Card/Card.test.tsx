// Card.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

test("Card is visible", () => {
  render(<Card title="Visible Card">Content</Card>);
  expect(screen.getByRole("group", { name: /card/i })).toBeVisible();
  expect(screen.getByText(/visible card/i)).toBeVisible();
});

test("Disabled Card background changes", () => {
  render(
    <Card title="Disabled" disabled>
      Content
    </Card>,
  );
  const region = screen.getByRole("group", { name: /card/i });

  expect(region).toHaveStyle("background: #333");
});
