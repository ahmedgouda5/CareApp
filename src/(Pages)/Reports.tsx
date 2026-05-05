import { Suspense, lazy } from "react";
import InputCustom from "../Shared/Components/InputCUstom";
import {
  ChartSkeleton,
  TableSkeleton,
} from "../components/PerformanceFallbacks";
import { DeferredSection } from "../components/DeferredSection";

const ReportsCharts = lazy(() =>
  import("../components/charts/ReportsCharts").then((module) => ({
    default: module.ReportsCharts,
  })),
);
const SalesByCategory = lazy(() =>
  import("../components/ReportsSalesForAnti").then((module) => ({
    default: module.SalesByCategory,
  })),
);
const TopProducts = lazy(() => import("../components/TopProducts"));

const Reports = () => {
  return (
    <div className="">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Reports & Analytics
          </h1>

          <p className="text-gray-500 dark:text-gray-400">
            {new Date().toLocaleString("en-US", {
              dateStyle: "long",
            })}{" "}
            — All Branches
          </p>
        </div>

        <div className="hidden md:flex w-full flex-wrap items-center gap-3 sm:w-auto sm:justify-end">
          <InputCustom text="Export PDF" />
          <InputCustom text="Export Excel" />
        </div>
      </nav>

      <main className="space-y-3">
        <section className="grid auto-rows-min  md:grid-cols-4 mt-6">
          {/* Revenue */}
          <div className="flex flex-col items-center text-center rounded-l-xl bg-gray-100 dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="my-3">
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                $12,486
              </span>
              <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
                TODAY'S REVENUE
              </h3>
            </div>

            <p className="text-sm text-emerald-500">↑ 22.4% vs last month</p>
          </div>

          {/* Orders */}
          <div className="flex flex-col items-center text-center  bg-gray-100 dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="my-3">
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                284
              </span>
              <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
                TOTAL ORDERS
              </h3>
            </div>

            <p className="text-sm text-emerald-500">↑ 14.8%</p>
          </div>

          {/* Patients */}
          <div className="flex flex-col items-center text-center  bg-gray-100 dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="my-3">
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                440
              </span>
              <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
                Avg. Order Value
              </h3>
            </div>

            <p className="text-sm text-emerald-500">↑ 6.6%</p>
          </div>

          {/* Alerts */}
          <div className="flex flex-col items-center text-center rounded-r-xl bg-gray-100 dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="my-3">
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                18
              </span>
              <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
                Unique Patients
              </h3>
            </div>

            <p className="text-sm text-emerald-500">↑ 18.2%</p>
          </div>
        </section>
        <DeferredSection
          fallback={
            <section className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 items-stretch">
              <div className="md:col-span-2 h-full">
                <ChartSkeleton />
              </div>
              <div className="h-full">
                <TableSkeleton />
              </div>
            </section>
          }
          minHeightClassName="min-h-[700px] md:min-h-[430px]"
        >
          <section className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 items-stretch">
            <div className="md:col-span-2 h-full">
              <Suspense fallback={<ChartSkeleton />}>
                <ReportsCharts />
              </Suspense>
            </div>
            <div className="h-full">
              <Suspense fallback={<TableSkeleton />}>
                <TopProducts />
              </Suspense>
            </div>
          </section>
        </DeferredSection>
        <DeferredSection
          fallback={<ChartSkeleton heightClass="h-[300px]" />}
          minHeightClassName="min-h-[320px]"
        >
          <section>
            <Suspense fallback={<ChartSkeleton heightClass="h-[300px]" />}>
              <SalesByCategory />
            </Suspense>
          </section>
        </DeferredSection>
      </main>
    </div>
  );
};

export default Reports;
