import { DashboardData, NavItem, UserAction } from "@/types/type";

export const navItems: NavItem[] = [
    { href: "#", label: "Dashboard" },
    { href: "#", label: "Orders" },
    { href: "#", label: "Products" },
    { href: "#", label: "Customers" },
    { href: "#", label: "Analytics" }
  ];
  
  export const userActions: UserAction[] = [
    { label: "Settings", action: () => alert("Go to settings") },
    { label: "Support", action: () => alert("Go to support") },
    { label: "Logout", action: () => alert("Logging out...") }
  ];

  // data.ts

  export const dashboardData: DashboardData = {
    stats: [
      {
        id: 1,
        title: "Total Revenue",
        value: "$45,000",
        percentage: "+2.5%",
        icon: "DollarSign",
      },
      {
        id: 2,
        title: "New Users",
        value: "1,200",
        percentage: "+3.8%",
        icon: "Users",
      },
      {
        id: 3,
        title: "Payments",
        value: "$12,300",
        percentage: "-1.2%",
        icon: "CreditCard",
      },
      {
        id: 4,
        title: "Activity",
        value: "76%",
        percentage: "+5.4%",
        icon: "Activity",
      },
    ],
    transactions: [
      {
        customer: "John Doe",
        email: "john@example.com",
        type: "Subscription",
        status: "Completed",
        date: "2023-09-01",
        amount: "$99.00",
      },
      {
        customer: "Jane Smith",
        email: "jane@example.com",
        type: "One-time purchase",
        status: "Pending",
        date: "2023-09-02",
        amount: "$149.00",
      },
      // Add more transactions here
    ],
    recentSales: [
      {
        customer: "Alice Johnson",
        email: "alice@example.com",
        avatar: "https://example.com/avatar1.png",
        amount: "$120.00",
      },
      {
        customer: "Bob Brown",
        email: "bob@example.com",
        avatar: "https://example.com/avatar2.png",
        amount: "$200.00",
      },
      // Add more recent sales here
    ],
  };
  
  
  