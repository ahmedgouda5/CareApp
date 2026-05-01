// components/PaymentBadge.tsx
import React from "react";
import type { PaymentMethod } from "./Type/Index";

const paymentConfig: Record<
  PaymentMethod,
  { dot: string; text: string; bg: string }
> = {
  Insurance: { dot: "bg-blue-400", text: "text-blue-700", bg: "bg-blue-50" },
  Cash: { dot: "bg-gray-400", text: "text-gray-600", bg: "bg-gray-100" },
  Card: { dot: "bg-purple-400", text: "text-purple-700", bg: "bg-purple-50" },
};

interface PaymentBadgeProps {
  method: PaymentMethod;
}

const PaymentBadge: React.FC<PaymentBadgeProps> = ({ method }) => {
  const cfg = paymentConfig[method];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {method}
    </span>
  );
};

export default PaymentBadge;
