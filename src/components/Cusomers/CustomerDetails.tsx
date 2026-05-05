import StatusBadge from "./StatusBadge";

export default function CustomerDetail({ customer }) {
  if (!customer)
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center p-10 text-sm text-gray-400">
        Select a customer to view details
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-gray-900 rounded-2xl px-6 py-5 border border-gray-700 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-bold shrink-0">
            {customer.initials}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white leading-tight">
              {customer.name}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5 mb-2">
              Patient ID: PAT-00234 · Joined Jan 2024
            </p>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={customer.status} />
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-700 text-gray-300 border border-gray-600">
                Insurance: BUPA
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="px-4 py-1.5 rounded-lg bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300 flex items-center gap-1.5 text-sm font-semibold">
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.22.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            Call
          </button>

          <button className="px-4 py-1.5 rounded-lg bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300 text-sm font-semibold">
            + New Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 py-5 px-4 text-center">
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            {customer.orders}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-1">
            Total Orders
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 py-5 px-4 text-center">
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            $1,240
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-1">
            Lifetime Spend
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 py-5 px-4 text-center">
          <p className="text-2xl font-bold text-amber-500 dark:text-amber-400">
            4.8★
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-1">
            Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}
