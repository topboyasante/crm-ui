import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

function ApplicantsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>YOE</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Test User</TableCell>
          <TableCell>user@gmail.com</TableCell>
          <TableCell>0594054494</TableCell>
          <TableCell>5</TableCell>
          <TableCell>To Contact</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default ApplicantsTable;
