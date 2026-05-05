import { Suspense, lazy } from "react";
import { DeferredSection } from "../components/DeferredSection";
import { ChartSkeleton, TableSkeleton } from "../components/PerformanceFallbacks";

const ExpiryAlerts = lazy(() => import("../components/InventoryApp/ExpiryAlerts"));
const InverntoryTable = lazy(
  () => import("../components/InventoryApp/InverntoryTable"),
);
const StockByCategory = lazy(
  () => import("../components/InventoryApp/StockByCategory"),
);
const StockTable = lazy(() => import("../components/InventoryApp/StockTable"));

const Inventory = () => {
  return (
    <main className=" space-y-6">
      <nav className="flex justify-between ">
        <div>
          <h1 className="text-xl font-semibold">Inventory & Stock Control</h1>
          <p className="text-gray-500">Last updated: Today, 09:45 AM</p>
        </div>
        <div>
          <button className="px-4 py-2 rounded-full bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
            + Restock Record
          </button>
        </div>
      </nav>
      <section>
        <Suspense fallback={<TableSkeleton />}>
          <InverntoryTable />
        </Suspense>
      </section>
      <DeferredSection fallback={<TableSkeleton />} minHeightClassName="min-h-[280px]">
        <section>
          <Suspense fallback={<TableSkeleton />}>
            <StockTable />
          </Suspense>
        </section>
      </DeferredSection>

      {/* Right Side */}
      <DeferredSection
        fallback={
          <section className="flex flex-col md:flex-row gap-6">
            <TableSkeleton />
            <ChartSkeleton heightClass="h-[260px]" />
          </section>
        }
        minHeightClassName="min-h-[620px] md:min-h-[320px]"
      >
        <section className="flex flex-col md:flex-row gap-6">
          <Suspense fallback={<TableSkeleton />}>
            <ExpiryAlerts />
          </Suspense>
          <Suspense fallback={<ChartSkeleton heightClass="h-[260px]" />}>
            <StockByCategory />
          </Suspense>
        </section>
      </DeferredSection>
    </main>
  );
};

export default Inventory;
