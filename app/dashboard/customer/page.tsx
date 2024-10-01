import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./_components/columns"
import { CustomerDataTable } from "./_components/data-table"
import { userSchema } from "./data/schema"
import api from "@/services/axios-custom"
import { BreadcrumbProps } from "@/types/type"
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrum"

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
  const users = await getAllUsers();

  const breadcrumbItems: BreadcrumbProps['items'] = [
    { label: "Home", href: "/dashboard" },
    { label: "Customers", href: "/dashboard/customer" }
  ];

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
        <BreadcrumbWithCustomSeparator items={breadcrumbItems} />
        </div>
        <CustomerDataTable data={users} columns={columns} />
      </div>
    </>
  )
}

