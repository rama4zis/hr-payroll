"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
export type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  status: "active" | "onboarding" | "offboarding";
  joinDate: string;
  salary: number;
  avatarUrl?: string;
};

const data: Employee[] = [
  {
    id: "728ed52f",
    name: "John Smith",
    email: "john.smith@example.com",
    department: "Engineering",
    position: "Senior Developer",
    status: "active",
    joinDate: "2021-03-15",
    salary: 95000,
  },
  {
    id: "489e1d42",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    status: "active",
    joinDate: "2020-11-02",
    salary: 85000,
  },
  {
    id: "573a1a8c",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    department: "Finance",
    position: "Financial Analyst",
    status: "active",
    joinDate: "2022-01-10",
    salary: 78000,
  },
  {
    id: "628b7c1e",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Human Resources",
    position: "HR Specialist",
    status: "active",
    joinDate: "2021-07-22",
    salary: 72000,
  },
  {
    id: "839d2f5b",
    name: "David Wilson",
    email: "david.wilson@example.com",
    department: "Engineering",
    position: "Frontend Developer",
    status: "onboarding",
    joinDate: "2023-04-05",
    salary: 82000,
  },
  {
    id: "927e3c6a",
    name: "Jessica Brown",
    email: "jessica.brown@example.com",
    department: "Product",
    position: "Product Manager",
    status: "active",
    joinDate: "2020-09-18",
    salary: 92000,
  },
  {
    id: "156f8d4c",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    department: "Sales",
    position: "Sales Representative",
    status: "offboarding",
    joinDate: "2019-05-30",
    salary: 68000,
  },
  {
    id: "349g7h2k",
    name: "Amanda Martinez",
    email: "amanda.martinez@example.com",
    department: "Customer Support",
    position: "Support Specialist",
    status: "active",
    joinDate: "2022-02-14",
    salary: 65000,
  },
  {
    id: "582j9l3m",
    name: "Kevin Lee",
    email: "kevin.lee@example.com",
    department: "Engineering",
    position: "Backend Developer",
    status: "onboarding",
    joinDate: "2023-03-20",
    salary: 88000,
  },
  {
    id: "673k4n5p",
    name: "Lisa Wang",
    email: "lisa.wang@example.com",
    department: "Design",
    position: "UI/UX Designer",
    status: "active",
    joinDate: "2021-11-08",
    salary: 79000,
  },
];

export default function EmployeesTable({ status }: { status?: string }) {
  const filteredData = status
    ? data.filter((employee) => employee.status === status)
    : data;

  const columns: ColumnDef<Employee>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "department",
      header: "Departemenet",
    },
    {
      accessorKey: "position",
      header: "Position",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "joinDate",
      header: "Join Date",
    },
    {
      accessorKey: "salary",
      header: "Salary",
    },
    {
      accessorKey: "actions",
      header: "Actions",
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="h-9 w-[250px] lg:w-[300px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto h-9">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No employees found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
