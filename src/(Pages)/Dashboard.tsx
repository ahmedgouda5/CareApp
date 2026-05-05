import { Suspense, lazy } from "react";
import {
  DollarSign,
  Package,
  Users,
  TriangleAlert,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  ChartSkeleton,
  TableSkeleton,
} from "../components/PerformanceFallbacks";
import { DeferredSection } from "../components/DeferredSection";

const CategoryPie = lazy(() =>
  import("../components/charts/category-pie").then((module) => ({
    default: module.CategoryPie,
  })),
);
const SalesChart = lazy(() =>
  import("../components/charts/sales-chart").then((module) => ({
    default: module.SalesChart,
  })),
);
const OrdersTable = lazy(() =>
  import("../components/OrdersTable").then((module) => ({
    default: module.OrdersTable,
  })),
);
const StockAlertTable = lazy(() =>
  import("../components/ALertTable").then((module) => ({
    default: module.StockAlertTable,
  })),
);

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 ">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Good Morning, Dr. Ahmed 👋
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Here's what's happening at your pharmacy today.
        </p>
      </div>

      {/* Cards */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {/* Revenue */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-emerald-500 dark:border-t-emerald-500">
          <div className="rounded-md bg-emerald-100 dark:bg-emerald-900/30 p-2 w-max">
            <DollarSign className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              TODAY'S REVENUE
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              $12,486
            </span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center gap-1">
            <ChevronUp size={14} /> +18.3% vs yesterday
          </p>
        </div>

        {/* Orders */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-blue-500 dark:border-t-blue-500">
          <div className="rounded-md bg-blue-100 dark:bg-blue-900/30 p-2 w-max">
            <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              TOTAL ORDERS
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              284
            </span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center gap-1">
            <ChevronUp size={14} /> +7.2% this month
          </p>
        </div>

        {/* Patients */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-violet-500 dark:border-t-violet-500">
          <div className="rounded-md bg-violet-100 dark:bg-violet-900/30 p-2 w-max">
            <Users className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              ACTIVE PATIENTS
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              440
            </span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center gap-1">
            <ChevronUp size={14} /> +32 new this week
          </p>
        </div>

        {/* Alerts */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-red-500 dark:border-t-red-500">
          <div className="rounded-md bg-red-100 dark:bg-red-900/30 p-2 w-max">
            <TriangleAlert className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              LOW STOCK ITEMS
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              18
            </span>
          </div>

          <p className="text-sm text-rose-500 flex items-center gap-1">
            <ChevronDown size={14} /> 5 critical, reorder now
          </p>
        </div>
      </div>

      {/* Charts */}
      <DeferredSection
        fallback={
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ChartSkeleton />
            <ChartSkeleton heightClass="h-[320px]" />
          </div>
        }
        minHeightClassName="min-h-[760px] md:min-h-[430px]"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Suspense fallback={<ChartSkeleton />}>
            <SalesChart />
          </Suspense>
          <Suspense fallback={<ChartSkeleton heightClass="h-[320px]" />}>
            <CategoryPie />
          </Suspense>
        </div>
      </DeferredSection>

      {/* Tables */}
      <DeferredSection
        fallback={
          <div className="flex gap-2 flex-col md:flex-row">
            <TableSkeleton />
            <TableSkeleton />
          </div>
        }
        minHeightClassName="min-h-[700px] md:min-h-[420px]"
      >
        <div className="flex gap-2 flex-col md:flex-row">
          <Suspense fallback={<TableSkeleton />}>
            <StockAlertTable />
          </Suspense>
          <Suspense fallback={<TableSkeleton />}>
            <OrdersTable />
          </Suspense>
        </div>
      </DeferredSection>
    </div>
  );
};

export default Dashboard;
