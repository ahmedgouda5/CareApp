/* eslint-disable react-refresh/only-export-components */
"use client";

import * as React from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";

import { z } from "zod";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { AddingProductModel } from "./AddingModel";
import { UpdateProductModel } from "./UpdateModel";

export const schema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  sku: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
  expiry: z.string(),
  status: z.string(),
});

type Product = z.infer<typeof schema>;

const initialData: Product[] = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    description: "Caps, Box of 30",
    sku: "SKU-00124",
    category: "Antibiotic",
    price: 14.5,
    stock: 8,
    expiry: "Aug 2026",
    status: "Critical",
  },
  {
    id: 2,
    name: "Insulin Glargine 100IU",
    description: "Injection, 10ml vial",
    sku: "SKU-00213",
    category: "Antidiabetic",
    price: 48,
    stock: 3,
    expiry: "Jun 2026",
    status: "Critical",
  },
  {
    id: 3,
    name: "Omeprazole 20mg",
    description: "Capsule, Box of 28",
    sku: "SKU-00345",
    category: "GI",
    price: 18.9,
    stock: 19,
    expiry: "Dec 2026",
    status: "Low Stock",
  },
  {
    id: 4,
    name: "Vitamin D3 1000IU",
    description: "Softgel, Bottle 120ct",
    sku: "SKU-00501",
    category: "Vitamin",
    price: 22,
    stock: 340,
    expiry: "Mar 2028",
    status: "In Stock",
  },
  {
    id: 5,
    name: "Amlodipine 5mg",
    description: "Tablet, Strip of 30",
    sku: "SKU-00677",
    category: "Cardiac",
    price: 9.8,
    stock: 124,
    expiry: "Jan 2027",
    status: "In Stock",
  },
];

const statusStyles: Record<string, string> = {
  Critical: "bg-red-100 text-red-600",
  "Low Stock": "bg-yellow-100 text-yellow-600",
  "In Stock": "bg-green-100 text-green-600",
};

const categoryStyles: Record<string, string> = {
  Antibiotic: "bg-green-100 text-green-600",
  Antidiabetic: "bg-blue-100 text-blue-600",
  GI: "bg-pink-100 text-pink-600",
  Vitamin: "bg-purple-100 text-purple-600",
  Cardiac: "bg-red-100 text-red-600",
};

function StockBar({ value }: { value: number }) {
  const width = Math.min(value, 100);

  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            value < 10
              ? "bg-red-500"
              : value < 30
                ? "bg-yellow-500"
                : "bg-green-500"
          }`}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-sm">{value}</span>
    </div>
  );
}

const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(v) => table.toggleAllRowsSelected(!!v)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "PRODUCT NAME",
    cell: ({ row }) => (
      <div className="flex gap-3 items-center">
        <div>
          <p className="font-medium">{row.original.name}</p>
          <p className="text-xs text-gray-500">{row.original.description}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 text-xs rounded-full ${categoryStyles[row.original.category]}`}
      >
        {row.original.category}
      </span>
    ),
  },
  {
    accessorKey: "price",
    header: "PRICE",
    cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
  },
  {
    accessorKey: "stock",
    header: "STOCK",
    cell: ({ row }) => <StockBar value={row.original.stock} />,
  },
  {
    accessorKey: "expiry",
    header: "EXPIRY",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => (
      <span
        className={`px-3 py-1 rounded-full text-xs ${statusStyles[row.original.status]}`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => (
      <div className="flex items-center justify-center gap-2">Actions</div>
    ),
    cell: () => (
      <div className="flex justify-center gap-2">
        <div className="flex gap-2">
          <UpdateProductModel />
          <Button size="icon" variant="outline">
            🗑️
          </Button>
        </div>
      </div>
    ),
  },
];

export function ProductsTable() {
  const [data] = React.useState(initialData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
      <nav>
        <section className="flex justify-between mb-5">
          <div>
            <h3 className="font-bold">Products Management</h3>
            <p className="text-gray-500">1,284 products in catalog</p>
          </div>
          <div>
            <AddingProductModel />
          </div>
        </section>
      </nav>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="">
            {table.getRowModel().rows.map((row) => (
              <TableRow className="hover:bg-green-700/20" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm">
            <span className="font-semibold text-green-600">Showing 5</span>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              of 1,284 products
            </span>
          </span>

          <div className="flex items-center gap-2">
            <Button className="bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
              Prev
            </Button>
            <Button className="bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
