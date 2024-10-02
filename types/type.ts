export interface NavItem {
    href: string;
    label: string;
    icon?: React.ReactNode;
  }
  
  export interface UserAction {
    label: string;
    action: () => void;
  }
  
  export interface ProductSearch {
    query: string;
  }

// Define the structure of each stat item
export type Stat = {
    id: number;
    title: string;
    value: string;
    percentage: string;
    icon: 'DollarSign' | 'Users' | 'CreditCard' | 'Activity'; // Enum for the icons
  };
  
  // Define the structure of each transaction item
  export type Transaction = {
    customer: string;
    email: string;
    type: string;
    status: string;
    date: string;
    amount: string;
  };
  
  // Define the structure of each recent sale item
  export type RecentSale = {
    customer: string;
    email: string;
    avatar: string;
    amount: string;
  };
  
  // Define the full structure of the dashboard data
  export type DashboardData = {
    stats: Stat[];
    transactions: Transaction[];
    recentSales: RecentSale[];
  };

  export interface Meta {
    page?: number;
    page_size?: number;
    sort?: any;
    filter?: any;
    search?: string;
  }

  export type BreadcrumbProps = {
    items: {
      label: string;
      href?: string; // Optional if it's a page and not a link
    }[];
  };

  export interface SearchParams {
    [key: string]: string | string[] | undefined
  }
  
  export interface Option {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
    withCount?: boolean
  }
  
  export interface DataTableFilterField<TData> {
    label: string
    value: keyof TData
    placeholder?: string
    options?: Option[]
  }
  
  export interface DataTableFilterOption<TData> {
    id: string
    label: string
    value: keyof TData
    options: Option[]
    filterValues?: string[]
    filterOperator?: string
    isMulti?: boolean
  }
  


  