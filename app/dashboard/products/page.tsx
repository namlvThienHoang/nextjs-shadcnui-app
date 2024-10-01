
import { columns } from "./_components/columns"
import { ProductDataTable } from "./_components/data-table"
import { Metadata } from "next";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrum";
import { BreadcrumbProps, Meta } from "@/types/type";
import { useProducts } from "@/hooks/use-products";

export const metadata: Metadata = {
  title: "Products",
  description: "A task and issue tracker build using Tanstack Table.",
}

export default async function ProductPage() {
  const meta: Meta = {
    page: 1,
    page_size: 10,
    sort: { name: 'asc' },
    search: '',
    filter: {}
  };

  const { products, isLoading, error } = useProducts(meta);

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
      </div>
      <ProductDataTable data={products || []} columns={columns} />
    </div>
  </>
  )
}

