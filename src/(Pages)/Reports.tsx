import InputCustom from "../Shared/Components/InputCUstom";

const Reports = () => {
  return (
    <div className="p-6  min-h-screen">
      <div className="flex items-center justify-between">
        <div>
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

        <div className="flex items-center gap-4">
          <InputCustom text="Export PDF" />
          <InputCustom text="Export Excel" />
        </div>
      </div>

      <div className="grid auto-rows-min  md:grid-cols-4 mt-6">
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

          <p className="text-sm text-emerald-500">+18.3% vs yesterday</p>
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

          <p className="text-sm text-emerald-500">+7.2% this month</p>
        </div>

        {/* Patients */}
        <div className="flex flex-col items-center text-center  bg-gray-100 dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="my-3">
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              440
            </span>
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              ACTIVE PATIENTS
            </h3>
          </div>

          <p className="text-sm text-emerald-500">+32 new this week</p>
        </div>

        {/* Alerts */}
        <div className="flex flex-col items-center text-center rounded-r-xl bg-gray-100 dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="my-3">
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              18
            </span>
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              LOW STOCK ITEMS
            </h3>
          </div>

          <p className="text-sm text-emerald-500">5 critical, reorder now</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
