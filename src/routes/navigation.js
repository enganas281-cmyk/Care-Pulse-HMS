import {
  Activity,
  Ambulance,
  Bed,
  Building2,
  CalendarClock,
  ClipboardList,
  CreditCard,
  FlaskConical,
  LayoutDashboard,
  Pill,
  ClipboardPlus,
  Settings,
  Stethoscope,
  UserRoundCog,
  Users,
  Warehouse,
} from "lucide-react";

export const navigation = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Patients", path: "/patients", icon: Users },
  { label: "Appointments", path: "/appointments", icon: CalendarClock },
  { label: "Doctors", path: "/doctors", icon: Stethoscope },
  { label: "Staff", path: "/staff", icon: UserRoundCog },
  { label: "Departments", path: "/departments", icon: Building2 },
  { label: "Admissions", path: "/admissions", icon: Bed },
  { label: "Rooms", path: "/rooms", icon: Bed },
  { label: "Pharmacy", path: "/pharmacy", icon: Pill },
  { label: "Inventory", path: "/inventory", icon: Warehouse },
  { label: "Billing", path: "/billing", icon: CreditCard },
  { label: "Laboratory", path: "/laboratory", icon: FlaskConical },
  { label: "Records", path: "/records", icon: ClipboardPlus },
  { label: "Ambulance", path: "/ambulance", icon: Ambulance },
  { label: "Reports", path: "/reports", icon: ClipboardList },
  { label: "Settings", path: "/settings", icon: Settings },
];

export const quickActions = [
  { label: "New Patient", icon: Users },
  { label: "Book Visit", icon: CalendarClock },
  { label: "Vitals", icon: Activity },
  { label: "Invoice", icon: CreditCard },
];
