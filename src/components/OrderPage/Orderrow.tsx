import React from "react";
import CustomerAvatar from "./Customeravatar";
import StatusBadge from "./Statusbadge";
import PaymentBadge from "./Paymentbadge";
import ViewOrderDialog from "./Vieworderdialog";
import type { Order } from "./Type/Index";

interface OrderRowProps {
  order: Order;
}

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-green-700/20">
      <td className="py-4 px-4 whitespace-nowrap">
        <span className="text-sm font-bold text-indigo-600">#{order.id}</span>
      </td>

      <td className="py-4 px-4 ">
        <CustomerAvatar
          initials={order.customer.initials}
          avatarColor={order.customer.avatarColor}
          name={order.customer.name}
        />
      </td>

      <td className="py-4 px-4 whitespace-nowrap hidden sm:table-cell">
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {order.date}
        </span>
      </td>

      <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {order.items} item{order.items > 1 ? "s" : ""}
        </span>
      </td>

      <td className="py-4 px-4 whitespace-nowrap">
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          ${order.total.toFixed(2)}
        </span>
      </td>

      <td className="py-4 px-4 hidden lg:table-cell">
        <PaymentBadge method={order.payment} />
      </td>

      <td className="py-4 px-4">
        <StatusBadge status={order.status} />
      </td>

      <td className="py-4 px-4 text-right ">
        <ViewOrderDialog order={order} />
      </td>
    </tr>
  );
};

export default OrderRow;
