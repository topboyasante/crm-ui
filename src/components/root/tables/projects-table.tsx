import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

function ProjectsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>CRM</TableCell>
          <TableCell>Community</TableCell>
          <TableCell>High</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default ProjectsTable;
