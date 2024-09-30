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
  
  