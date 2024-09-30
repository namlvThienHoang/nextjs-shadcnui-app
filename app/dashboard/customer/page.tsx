import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { taskSchema } from "./data/schema"
import api from "@/services/axios-custom"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  try {
    const response = await api.get("https://dummyjson.com/c/2a53-aa52-4855-a0b7");

    const tasks = response.data;

    return z.array(taskSchema).parse(tasks);
  } catch (error) {
    throw new Error(`Failed to fetch tasks: ${error}`);
  }
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}