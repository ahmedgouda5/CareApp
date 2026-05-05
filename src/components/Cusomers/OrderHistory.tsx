import { orders } from "../../data/data";
import StatusBadge from "./StatusBadge";

export default function OrderHistory() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-5">
      <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide mb-4">
        Order History
      </h3>

      <div className="overflow-x-auto">
        <table
          className="w-full text-sm border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <colgroup>
            <col style={{ width: "18%" }} />
            <col style={{ width: "38%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>

          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              {["ORDER", "PRODUCTS", "TOTAL", "DATE", "STATUS"].map((h) => (
                <th
                  key={h}
                  className="text-left pb-3 text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {orders.map((o, i) => (
              <tr
                key={o.id}
                className={
                  i < orders.length - 1
                    ? "border-b border-gray-50 dark:border-gray-700/50"
                    : ""
                }
              >
                <td className="py-3.5 font-bold text-gray-800 dark:text-gray-100">
                  {o.id}
                </td>
                <td className="py-3.5 text-gray-500 dark:text-gray-400">
                  {o.products}
                </td>
                <td className="py-3.5 font-bold text-gray-800 dark:text-gray-100">
                  {o.total}
                </td>
                <td className="py-3.5 text-gray-400 dark:text-gray-500">
                  {o.date}
                </td>
                <td className="py-3.5">
                  <StatusBadge status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
