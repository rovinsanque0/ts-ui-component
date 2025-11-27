import { render, screen } from "@testing-library/react";
import Text from "./Text";
import React from "react";

describe("Text Component visual state", () => {
  test("renders text content", () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("applies color prop", () => {
    render(<Text color="red">Colored Text</Text>);
    const text = screen.getByText("Colored Text");
    expect(text).toHaveStyle({ color: "red" });
  });

  test("applies size prop (lg)", () => {
    render(<Text size="lg">Large Text</Text>);
    const text = screen.getByText("Large Text");
    expect(text).toHaveStyle({ fontSize: "1.25rem" });
  });
});
