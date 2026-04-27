import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

const data = [
  {
    category: "Antibiotics",
    units: 4820,
    revenue: "$50,440",
    margin: 38,
    growth: 24,
    contribution: 34,
    color: "bg-green-500",
  },
  {
    category: "Antidiabetics",
    units: 2140,
    revenue: "$38,200",
    margin: 42,
    growth: 31,
    contribution: 26,
    color: "bg-blue-500",
  },
  {
    category: "Vitamins",
    units: 3660,
    revenue: "$32,620",
    margin: 28,
    growth: 18,
    contribution: 22,
    color: "bg-yellow-500",
  },
  {
    category: "Cardiac",
    units: 1880,
    revenue: "$18,440",
    margin: 35,
    growth: -4,
    contribution: 12,
    color: "bg-red-500",
  },
];

export function SalesByCategory() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">
          Sales by Category — April 2026
        </h3>
        <Button variant="outline" size="sm">
          Export
        </Button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-left">
              <th className="pb-3">CATEGORY</th>
              <th>UNITS SOLD</th>
              <th>REVENUE</th>
              <th>MARGIN</th>
              <th>GROWTH</th>
              <th>CONTRIBUTION</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.category}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                {/* Category */}
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700">
                    {item.category}
                  </span>
                </td>

                {/* Units */}
                <td className="font-medium">{item.units}</td>

                {/* Revenue */}
                <td>{item.revenue}</td>

                {/* Margin */}
                <td>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    {item.margin}%
                  </span>
                </td>

                {/* Growth */}
                <td>
                  <span
                    className={`font-medium ${
                      item.growth > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.growth > 0 ? "↑" : "↓"} {Math.abs(item.growth)}%
                  </span>
                </td>

                {/* Contribution */}
                <td className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <Progress value={item.contribution} />
                    <span className="text-xs text-gray-500">
                      {item.contribution}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
