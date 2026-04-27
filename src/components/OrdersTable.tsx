import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const orders = [
  {
    id: "#ORD-8821",
    name: "Mohamed Khalid",
    initials: "MK",
    items: 3,
    total: "$84.50",
    status: "Completed",
    time: "5m ago",
  },
  {
    id: "#ORD-8820",
    name: "Sara Fahmy",
    initials: "SF",
    items: 1,
    total: "$22.00",
    status: "Pending",
    time: "12m ago",
  },
  {
    id: "#ORD-8819",
    name: "Ahmed Hassan",
    initials: "AH",
    items: 5,
    total: "$156.80",
    status: "Completed",
    time: "28m ago",
  },
  {
    id: "#ORD-8818",
    name: "Layla Mostafa",
    initials: "LM",
    items: 2,
    total: "$45.20",
    status: "Cancelled",
    time: "1h ago",
  },
  {
    id: "#ORD-8817",
    name: "Yusuf Omar",
    initials: "YO",
    items: 4,
    total: "$98.30",
    status: "Processing",
    time: "2h ago",
  },
  {
    id: "#ORD-8817",
    name: "Yusuf Omar",
    initials: "YO",
    items: 4,
    total: "$98.30",
    status: "Processing",
    time: "2h ago",
  },
  {
    id: "#ORD-8817",
    name: "Yusuf Omar",
    initials: "YO",
    items: 4,
    total: "$98.30",
    status: "Processing",
    time: "2h ago",
  },
] as const;

type OrderStatus = (typeof orders)[number]["status"];

const statusStyles: Record<OrderStatus, string> = {
  Completed:
    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  Pending:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  Cancelled: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  Processing:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
};

export function OrdersTable() {
  const router = useNavigate();
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Recent Orders</h3>
        <Button
          onClick={() => {
            router("/orders");
          }}
          variant="ghost"
        >
          View All
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              {/* Order ID */}
              <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                {order.id}
              </TableCell>

              {/* Customer */}
              <TableCell>
                <div className="flex items-center gap-">
                  <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {order.initials}
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">
                    {order.name}
                  </span>
                </div>
              </TableCell>

              {/* Items */}
              <TableCell className="text-gray-900 dark:text-gray-100">
                {order.items} {order.items === 1 ? "item" : "items"}
              </TableCell>

              {/* Total */}
              <TableCell>{order.total}</TableCell>

              {/* Status */}
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[order.status]}`}
                >
                  • {order.status}
                </span>
              </TableCell>

              {/* Time */}
              <TableCell className="text-gray-500">{order.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
