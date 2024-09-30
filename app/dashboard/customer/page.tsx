import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./_components/columns"
import { CustomerDataTable } from "./_components/data-table"
import { userSchema } from "./data/schema"
import api from "@/services/axios-custom"

export const metadata: Metadata = {
  title: "Customers",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getAllUsers() {
  try {
    const response = await api.get("https://dummyjson.com/users");

    const users = response.data.users;

    return await z.array(userSchema).parseAsync(users);
  } catch (error) {
    console.log(error)
    throw new Error(`Failed to fetch tasks: ${error}`);
  }
}

export default async function UserPage() {
  const users = await getAllUsers()

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <CustomerDataTable data={users} columns={columns} />
      </div>
    </>
  )
}

