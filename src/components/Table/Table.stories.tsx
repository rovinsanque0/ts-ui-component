// Table.stories.tsx
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};
export default meta;

export const Default: StoryObj<typeof Table> = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell header>ID</TableCell>
          <TableCell header>Name</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Rovin Sanque</TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Bea</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>End of Table</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: StoryObj<typeof Table> = {
  render: () => (
    <Table disabled>
      <TableHeader>
        <TableRow disabled>
          <TableCell header>ID</TableCell>
          <TableCell header>Name</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow disabled>
          <TableCell>1</TableCell>
          <TableCell>Rovin Sanque</TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
        <TableRow disabled>
          <TableCell>2</TableCell>
          <TableCell>Bea</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow disabled>
          <TableCell colSpan={3}>End of Table</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
