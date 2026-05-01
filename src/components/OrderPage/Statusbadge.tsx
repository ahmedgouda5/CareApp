// components/StatusBadge.tsx
import React from "react";
import type { OrderStatus } from "./Type/Index";

const statusConfig: Record<
  OrderStatus,
  { dot: string; text: string; bg: string }
> = {
  Completed: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  Pending: { dot: "bg-amber-400", text: "text-amber-600", bg: "bg-amber-50" },
  Cancelled: { dot: "bg-red-500", text: "text-red-600", bg: "bg-red-50" },
  Processing: { dot: "bg-blue-500", text: "text-blue-700", bg: "bg-blue-50" },
};

interface StatusBadgeProps {
  status: OrderStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const cfg = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
};

export default StatusBadge;
