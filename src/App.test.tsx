import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
  
  expect(screen.getByText(/Rovin Sanque/i)).toBeInTheDocument();
});
