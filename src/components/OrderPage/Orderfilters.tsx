// components/OrderFilters.tsx
import React from "react";
import type { OrderStatus } from "./Type/Index";

interface OrderFiltersProps {
  search: string;
  onSearch: (val: string) => void;
  statusFilter: OrderStatus | "All Status";
  onStatusFilter: (val: OrderStatus | "All Status") => void;
  dateFilter: string;
  onDateFilter: (val: string) => void;
}

const statuses: Array<OrderStatus | "All Status"> = [
  "All Status",
  "Completed",
  "Pending",
  "Cancelled",
  "Processing",
];

const dateOptions = ["Today", "This Week", "This Month", "All Time"];

const OrderFilters: React.FC<OrderFiltersProps> = ({
  search,
  onSearch,
  statusFilter,
  onStatusFilter,
  dateFilter,
  onDateFilter,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4 ">
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search orders by ID or customer..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
        />
      </div>

      <div className="relative">
        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusFilter(e.target.value as OrderStatus | "All Status")
          }
          className="appearance-none pl-4 pr-9 py-2.5 rounded-xl border border-gray-200 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition cursor-pointer"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="relative">
        <select
          value={dateFilter}
          onChange={(e) => onDateFilter(e.target.value)}
          className="appearance-none pl-4 pr-9 py-2.5 rounded-xl border border-gray-200 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition cursor-pointer"
        >
          {dateOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default OrderFilters;
