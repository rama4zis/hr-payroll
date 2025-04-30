import {
  CalendarDays,
  ClipboardList,
  Clock,
  CreditCard,
  Folder,
  Home,
  MessageSquare,
  UserPlus,
  Users,
} from "lucide-react";

export const HR_MENU = [
  {
    group: "Main Menu",
    items: [
      {
        title: "Dashboard",
        url: "#",
        icon: Home,
      },
      {
        title: "Task",
        url: "#",
        icon: ClipboardList,
      },
      {
        title: "Inbox",
        url: "#",
        icon: MessageSquare,
      },
      {
        title: "Calendar",
        url: "#",
        icon: CalendarDays,
      },
      {
        title: "Projects",
        url: "#",
        icon: Folder,
      },
    ],
  },
  {
    group: "HR Managemenet",
    items: [
      {
        title: "Employees",
        url: "/hr/employees",
        icon: Users,
      },
      {
        title: "Attendance",
        url: "#",
        icon: Clock,
      },
      {
        title: "Payroll",
        url: "#",
        icon: CreditCard,
      },
      {
        title: "Hiring",
        url: "#",
        icon: UserPlus,
      },
    ],
  },
] as const;
