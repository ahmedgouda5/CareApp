// components/ViewOrderDialog.tsx
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import type { Order } from "./Type/Index";

interface ViewOrderDialogProps {
  order: Order;
}

const ViewOrderDialog: React.FC<ViewOrderDialogProps> = ({ order }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-xs font-medium px-4 py-1.5 rounded-lg border-gray-200 text-gray-900 dark:text-gray-100 hover:bg-gray-50/60"
        >
          View
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Order #{order.id}</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Customer</span>
                <span>{order.customer.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Date</span>
                <span>{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Items</span>
                <span>
                  {order.items} item{order.items > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Total</span>
                <span className="font-semibold text-gray-800">
                  ${order.total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Payment</span>
                <span>{order.payment}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Status</span>
                <span>{order.status}</span>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction>Process Order</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ViewOrderDialog;
