// Table.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";

test("Table renders properly", () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell header>ID</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>End</TableCell>
        </TableRow>
      </TableFooter>
    </Table>,
  );
  expect(screen.getByRole("table")).toBeVisible();
  expect(screen.getByText(/end/i)).toBeVisible();
});

test("Disabled table is marked as aria-disabled", () => {
  render(<Table disabled>Content</Table>);
  const table = screen.getByTestId("table");
  expect(table).toHaveAttribute("aria-disabled", "true");
});
