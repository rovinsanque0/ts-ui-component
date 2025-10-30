import { render, screen } from "@testing-library/react";
import Text from "./Text";
import React from "react";

describe("Text Component visual state", () => {
  test("enabled input has black text", () => {
    render(<Text />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveStyle({ color: "black" });
  });

  test("disabled input has gray text", () => {
    render(<Text disabled />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveStyle({ color: "gray" });
  });
});
