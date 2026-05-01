// types/order.ts

export type OrderStatus = "Completed" | "Pending" | "Cancelled" | "Processing";
export type PaymentMethod = "Insurance" | "Cash" | "Card";

export interface Order {
  id: string;
  customer: {
    name: string;
    initials: string;
    avatarColor: string;
  };
  date: string;
  items: number;
  total: number;
  payment: PaymentMethod;
  status: OrderStatus;
}

export interface OrderStats {
  total: number;
  pending: number;
  completed: number;
  cancelled: number;
}

export const orders: Order[] = [
  {
    id: "ORD-8821",
    customer: { name: "Mohamed Khalid", initials: "MK", avatarColor: "bg-indigo-100 text-indigo-700" },
    date: "2026-04-30",
    items: 3,
    total: 84.5,
    payment: "Card",
    status: "Completed",
  },
  {
    id: "ORD-8820",
    customer: { name: "Sara Fahmy", initials: "SF", avatarColor: "bg-emerald-100 text-emerald-700" },
    date: "2026-04-30",
    items: 1,
    total: 22,
    payment: "Cash",
    status: "Pending",
  },
  {
    id: "ORD-8819",
    customer: { name: "Ahmed Hassan", initials: "AH", avatarColor: "bg-amber-100 text-amber-700" },
    date: "2026-04-29",
    items: 5,
    total: 156.8,
    payment: "Insurance",
    status: "Processing",
  },
  {
    id: "ORD-8818",
    customer: { name: "Layla Mostafa", initials: "LM", avatarColor: "bg-rose-100 text-rose-700" },
    date: "2026-04-28",
    items: 2,
    total: 45.2,
    payment: "Card",
    status: "Cancelled",
  },
  {
    id: "ORD-8817",
    customer: { name: "Yusuf Omar", initials: "YO", avatarColor: "bg-sky-100 text-sky-700" },
    date: "2026-04-28",
    items: 4,
    total: 98.3,
    payment: "Cash",
    status: "Processing",
  },
  {
    id: "ORD-8816",
    customer: { name: "Nour Ali", initials: "NA", avatarColor: "bg-violet-100 text-violet-700" },
    date: "2026-04-27",
    items: 2,
    total: 63.4,
    payment: "Insurance",
    status: "Completed",
  },
];

export const orderStats: OrderStats = {
  total: orders.length,
  pending: orders.filter((o) => o.status === "Pending").length,
  completed: orders.filter((o) => o.status === "Completed").length,
  cancelled: orders.filter((o) => o.status === "Cancelled").length,
};
