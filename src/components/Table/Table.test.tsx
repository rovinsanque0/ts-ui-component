import { render, screen } from "@testing-library/react";
import Table from "./Table";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

test("Table renders without crashing", () => {
  render(
    <Table>
      <TableRow>
        <TableCell>Test</TableCell>
      </TableRow>
    </Table>
  );

  expect(screen.getByTestId("table")).toBeInTheDocument();
});
