"use client"
"use memo"

import * as React from "react"
import { type DataTableFilterField } from "@/types/type"

import { useDataTable } from "@/hooks/use-data-table"
import { DataTableAdvancedToolbar } from "@/components/data-table/advanced/data-table-advanced-toolbar"
import { DataTable } from "@/components/data-table/data-table"
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar"

import { type getTasks } from "../_lib/queries"
import { getColumns } from "./tasks-table-columns"
import { TasksTableFloatingBar } from "./tasks-table-floating-bar"
import { useTasksTable } from "./tasks-table-provider"
import { TasksTableToolbarActions } from "./tasks-table-toolbar-actions"
import { Task } from "@/types/schema"
import { taskPriorities, taskStatus } from "../_lib/data"

interface TasksTableProps {
  tasksPromise: ReturnType<typeof getTasks>
}

export function TasksTable({ tasksPromise }: TasksTableProps) {
  // Feature flags for showcasing some additional features. Feel free to remove them.
  const { featureFlags } = useTasksTable()

  const { data, pageCount } = React.use(tasksPromise)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), [])

  /**
   * This component can render either a faceted filter or a search filter based on the `options` prop.
   *
   * @prop options - An array of objects, each representing a filter option. If provided, a faceted filter is rendered. If not, a search filter is rendered.
   *
   * Each `option` object has the following properties:
   * @prop {string} label - The label for the filter option.
   * @prop {string} value - The value for the filter option.
   * @prop {React.ReactNode} [icon] - An optional icon to display next to the label.
   * @prop {boolean} [withCount] - An optional boolean to display the count of the filter option.
   */
  const filterFields: DataTableFilterField<Task>[] = [
    {
      label: "Title",
      value: "title",
      placeholder: "Filter titles...",
    },
    {
      label: "Status",
      value: "status",
      options: taskStatus.map((status) => ({
        label: status.label[0].toUpperCase() + status.label.slice(1),
        value: status.value,
        icon: status.icon,
        withCount: true,
      })),
    },
    {
      label: "Priority",
      value: "priority",
      options: taskPriorities.map((priority) => ({
        label: priority.label[0]?.toUpperCase() + priority.label.slice(1),
        value: priority.value,
        icon: priority.icon,
        withCount: true,
      })),
    },
  ]

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    /* optional props */
    filterFields,
    enableAdvancedFilter: featureFlags.includes("advancedFilter"),
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    // For remembering the previous row selection on page change
    getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable
      table={table}
      floatingBar={
        featureFlags.includes("floatingBar") ? (
          <TasksTableFloatingBar table={table} />
        ) : null
      }
    >
      {featureFlags.includes("advancedFilter") ? (
        <DataTableAdvancedToolbar table={table} filterFields={filterFields}>
          <TasksTableToolbarActions table={table} />
        </DataTableAdvancedToolbar>
      ) : (
        <DataTableToolbar table={table} filterFields={filterFields}>
          <TasksTableToolbarActions table={table} />
        </DataTableToolbar>
      )}
    </DataTable>
  )
}
