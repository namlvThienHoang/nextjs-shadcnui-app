import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"

  export const genders = [
    {
      value: "male",
      label: "Nam",
    },
    {
      value: "female",
      label: "Nữ",
    },
    {
      value: "other",
      label: "Khác",
    },
  ]
  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "backlog",
      label: "Backlog",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "todo",
      label: "Todo",
      icon: CircleIcon,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: StopwatchIcon,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
    },
  ]

  export const roles = [
    {
      value: "admin",
      label: "Admin",
      icon: ArrowDownIcon,
    },
    {
      value: "manager",
      label: "Manager",
      icon: ArrowDownIcon,
    },
    {
      value: "customer",
      label: "Customer",
      icon: ArrowDownIcon,
    }
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]