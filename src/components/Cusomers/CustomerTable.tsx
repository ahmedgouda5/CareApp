import { memo, useMemo, useState } from "react";
import StatusBadge from "./StatusBadge";
import { customers } from "../../data/data";
import type { Customer } from "./CustomerDetails";

const CustomerTable = memo(function CustomerTable({
  selected,
  onSelect,
}: {
  selected: Customer | null;
  onSelect: (customer: Customer) => void;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      customers.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.phone.includes(query),
      ),
    [query],
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden min-h-[60vh]">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers..."
            className="
              w-full pl-9 pr-3 py-2 text-sm rounded-xl
              bg-gray-100 dark:bg-gray-700
              text-gray-800 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              border border-transparent focus:border-green-400 dark:focus:border-green-500
              outline-none transition-colors duration-200
            "
          />
        </div>
      </div>

      <div className="grid grid-cols-[1fr_52px_88px] px-4 py-2 border-b border-gray-100 dark:border-gray-700">
        {["CUSTOMER", "ORDERS", "STATUS"].map((h) => (
          <span
            key={h}
            className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase"
          >
            {h}
          </span>
        ))}
      </div>

      <div className="overflow-y-auto flex-1">
        {filtered.map((c) => {
          const active = selected?.id === c.id;
          return (
            <div
              key={c.id}
              onClick={() => onSelect(c)}
              className={`
                grid grid-cols-[1fr_52px_88px] items-center px-4 py-3 cursor-pointer
                border-l-[3px] transition-all duration-150
                ${
                  active
                    ? "bg-green-50 dark:bg-green-900/20 border-l-green-500"
                    : "border-l-transparent hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }
              `}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${c.avatarBg} ${c.avatarText}`}
                >
                  {c.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">
                    {c.phone}
                  </p>
                </div>
              </div>

              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {c.orders}
              </span>
              <StatusBadge status={c.status} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default CustomerTable;
