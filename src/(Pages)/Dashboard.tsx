import {
  DollarSign,
  Package,
  Users,
  TriangleAlert,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { CategoryPie } from "../components/charts/category-pie";
import { SalesChart } from "../components/charts/sales-chart";
import { OrdersTable } from "../components/OrdersTable";
import { StockAlertTable } from "../components/ALertTable";

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 py-1 px-4">
      <div>
        <h1 className="text-2xl font-bold">Good Morning, Dr. Ahmed👋</h1>
        <p className="text-muted-foreground">
          Here's what's happening at your pharmacy today.
        </p>
      </div>

      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {/* Revenue */}
        <div className="rounded-xl bg-muted/50 p-4 border border-t-4 border-t-emerald-500 shadow-sm">
          <div className="rounded-md bg-emerald-200 p-2 w-max">
            <DollarSign className="h-5 w-5 text-emerald-600" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500">
              TODAY'S REVENUE
            </h3>
            <span className="text-2xl font-semibold">$12,486</span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center">
            <ChevronUp size={12} /> +18.3% vs yesterday
          </p>
        </div>

        {/* Orders */}
        <div className="rounded-xl bg-muted/50 p-4 border border-t-4 border-t-blue-500 shadow-sm">
          <div className="rounded-md bg-blue-200 p-2 w-max">
            <Package className="h-5 w-5 text-blue-600" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500">
              TOTAL ORDERS
            </h3>
            <span className="text-2xl font-semibold">284</span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center">
            <ChevronUp size={12} /> +7.2% this month
          </p>
        </div>

        {/* Patients */}
        <div className="rounded-xl bg-muted/50 p-4 border border-t-4 border-t-violet-500 shadow-sm">
          <div className="rounded-md bg-violet-200 p-2 w-max">
            <Users className="h-5 w-5 text-violet-600" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500">
              ACTIVE PATIENTS
            </h3>
            <span className="text-2xl font-semibold">440</span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center">
            <ChevronUp size={12} /> +32 new this week
          </p>
        </div>

        {/* Alerts */}
        <div className="rounded-xl bg-muted/50 p-4 border border-t-4 border-t-red-500 shadow-sm">
          <div className="rounded-md bg-red-200 p-2 w-max">
            <TriangleAlert className="h-5 w-5 text-rose-600" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500">
              LOW STOCK ITEMS
            </h3>
            <span className="text-2xl font-semibold ">18</span>
          </div>

          <p className="text-sm text-rose-500 flex items-center">
            <ChevronDown size={12} /> 5 critical, reorder now
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SalesChart />
        <CategoryPie />
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        <StockAlertTable />
        <OrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
