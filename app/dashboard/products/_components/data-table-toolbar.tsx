"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { categories } from "../data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { PlusCircle, File } from "lucide-react"
import { useRouter } from "next/navigation"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const router = useRouter();

  const handleCreate = () => {
    router.push(`/dashboard/product/create`); // Adjust the path according to your routing
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter sku..."
          value={(table.getColumn("sku")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("sku")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("category") && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title="Category"
            options={categories}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Button size="sm" variant="outline" className="h-7 gap-1 mr-4">
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Export
        </span>
      </Button>
      <Button size="sm" onClick={handleCreate} className="h-7 gap-1 mr-4">
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Product
        </span>
      </Button>
      <DataTableViewOptions table={table} />
    </div>
  )
}