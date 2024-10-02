import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CrossCircledIcon, QuestionMarkCircledIcon, StopwatchIcon } from "@radix-ui/react-icons"

export const taskLabels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "enhancement",
      label: "Enhancement",
    },
    {
        value: "documentation",
        label: "Documentation",
      },
  ]

  export const taskStatus = [
    {
      value: "todo",
      label: "Todo",
      icon: QuestionMarkCircledIcon
    },
    {
      value: "in-progress",
      label: "In-progress",
      icon: StopwatchIcon
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: CrossCircledIcon
      },
  ]

  export const taskPriorities = [
    {
      value: "low",
      label: "Low",
      icon: ArrowDownIcon
    },
    {
      value: "medium",
      label: "Medium",
      icon: ArrowRightIcon
    },
    {
      value: "high",
      label: "High",
      icon: ArrowUpIcon
    },
  ]