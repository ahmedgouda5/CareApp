import {
  Ban,
  Barcode,
  Check,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
} from "lucide-react";

const InverntoryTable = () => {
  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {/* Revenue */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-emerald-500 dark:border-t-emerald-500">
          <div className="rounded-md bg-emerald-100 dark:bg-emerald-900/30 p-2 w-max">
            <Barcode className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Total SKUs
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              1,284
            </span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center gap-1">
            <ChevronUp size={14} /> +24 this month
          </p>
        </div>

        {/* Orders */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-blue-500 dark:border-t-blue-500">
          <div className="rounded-md bg-blue-100 dark:bg-blue-900/30 p-2 w-max">
            <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              In Stock Items
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              1,142
            </span>
          </div>

          <p className="text-sm text-emerald-500 flex items-center gap-1">
            <ChevronUp size={14} /> 89% of catalog
          </p>
        </div>

        {/* Patients */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-violet-500 dark:border-t-violet-500">
          <div className="rounded-md bg-violet-100 dark:bg-violet-900/30 p-2 w-max">
            <ShieldAlert className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Low Stock
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              124
            </span>
          </div>

          <p className="text-sm text-red-500 flex items-center gap-1">
            <ChevronUp size={14} /> Needs attention
          </p>
        </div>

        {/* Alerts */}
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-red-500 dark:border-t-red-500">
          <div className="rounded-md bg-red-100 dark:bg-red-900/30 p-2 w-max">
            <Ban className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          </div>

          <div className="my-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Out of Stock
            </h3>
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              18
            </span>
          </div>

          <p className="text-sm text-rose-500 flex items-center gap-1">
            <ChevronDown size={14} /> 5 expiring soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default InverntoryTable;
