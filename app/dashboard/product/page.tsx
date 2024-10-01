import api from "@/services/axios-custom";
import { columns } from "./_components/columns"
import { ProductDataTable } from "./_components/data-table"
import { Product } from "./data/schema"
import { Metadata } from "next";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrum";
import { BreadcrumbProps } from "@/types/type";

export const metadata: Metadata = {
  title: "Products",
  description: "A task and issue tracker build using Tanstack Table.",
}

async function getData(): Promise<Product[]> {
  try {
    const response = await api.get('https://dummyjson.com/products');
    
    // Assuming the response contains a data object with a 'products' field
    const products: Product[] = response.data.products;
    
    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;  // Rethrow the error after logging it
  }
}

export default async function ProductPage() {
  const data = await getData();

  const breadcrumbItems: BreadcrumbProps['items'] = [
    { label: "Home", href: "/dashboard" },
    { label: "Products", href: "/dashboard/products" },
    { label: "Products", href: "/dashboard/products" }
  ];

  return (
    <>
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
      <BreadcrumbWithCustomSeparator items={breadcrumbItems} />
        {/* <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div> */}
      </div>
      <ProductDataTable data={data} columns={columns} />
    </div>
  </>
  )
}

