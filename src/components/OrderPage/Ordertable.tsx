// components/OrderTable.tsx
import React from "react";
import type { Order } from "./Type/Index";
import OrderRow from "./Orderrow";

interface OrderTableProps {
  orders: Order[];
  totalCount: number;
  page: number;
  pageSize: number;
  onPrev: () => void;
  onNext: () => void;
}

const COLUMNS = [
  { label: "ORDER ID", className: "w-32" },
  { label: "CUSTOMER", className: "min-w-[180px]" },
  { label: "DATE", className: "w-36 hidden sm:table-cell" },
  { label: "ITEMS", className: "w-24 hidden md:table-cell" },
  { label: "TOTAL", className: "w-28" },
  { label: "PAYMENT", className: "w-32 hidden lg:table-cell" },
  { label: "STATUS", className: "w-36" },
  { label: "ACTIONS", className: "w-24 text-right" },
];

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  totalCount,
  page,
  pageSize,
  onPrev,
  onNext,
}) => {
  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);
  const hasPrev = page > 1;
  const hasNext = end < totalCount;

  return (
    <div className="bg-gray-100 dark:bg-gray-800  rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Scrollable table wrapper for responsiveness */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]  ">
          <thead>
            <tr className="border-b border-gray-100 hover:bg-green-700/20">
              {COLUMNS.map((col) => (
                <th
                  key={col.label}
                  className={`py-3 px-4 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase ${col.className}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr className="">
                <td
                  colSpan={8}
                  className="py-12 text-center text-sm text-gray-400  "
                >
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => <OrderRow key={order.id} order={order} />)
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <span className="text-sm text-gray-400">
          Showing {start}-{end} of {totalCount.toLocaleString()} orders
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="px-4 py-1.5 rounded-lg bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            {"<- Prev"}
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="px-4 py-1.5 rounded-lg bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            {"Next ->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
