import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

const data = [
  {
    name: "Amoxicillin 500mg",
    category: "Antibiotic",
    stock: 8,
    min: 50,
    level: "Critical",
    percent: 5,
    expiry: "Aug 2026",
  },
  {
    name: "Insulin Glargine",
    category: "Antidiabetic",
    stock: 3,
    min: 30,
    level: "Critical",
    percent: 3,
    expiry: "Jun 2026",
  },
  {
    name: "Metformin 1g",
    category: "Antidiabetic",
    stock: 24,
    min: 60,
    level: "Low",
    percent: 22,
    expiry: "Nov 2026",
  },
  {
    name: "Omeprazole 20mg",
    category: "GI",
    stock: 19,
    min: 50,
    level: "Low",
    percent: 20,
    expiry: "Dec 2026",
  },
  {
    name: "Amlodipine 5mg",
    category: "Cardiac",
    stock: 124,
    min: 40,
    level: "Good",
    percent: 75,
    expiry: "Jan 2027",
  },
  {
    name: "Vitamin D3 1000IU",
    category: "Vitamin",
    stock: 340,
    min: 50,
    level: "Excellent",
    percent: 95,
    expiry: "Mar 2028",
  },
];

export default function StockTable() {
  function getLevelColor(level: string) {
    if (level === "Critical") return "bg-red-500";
    if (level === "Low") return "bg-yellow-500";
    return "bg-green-500";
  }

  function getTextColor(level: string) {
    if (level === "Critical") return "text-red-500";
    if (level === "Low") return "text-yellow-600";
    return "text-green-600";
  }

  function getCategoryStyle(cat: string) {
    const styles = {
      Antibiotic: "bg-green-100 text-green-700",
      Antidiabetic: "bg-blue-100 text-blue-700",
      GI: "bg-pink-100 text-pink-700",
      Cardiac: "bg-red-100 text-red-700",
      Vitamin: "bg-purple-100 text-purple-700",
    };
    return styles[cat] || "bg-gray-100";
  }

  return (
    <section className="bg-white p-5 rounded-2xl shadow">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Stock Levels</h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg">
            All
          </button>
          <button className="px-3 py-1 text-sm text-gray-500">Low</button>
          <button className="px-3 py-1 text-sm text-gray-500">Expiring</button>
        </div>
      </header>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500 text-sm">
            <TableHead>PRODUCT</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>CURRENT STOCK</TableHead>
            <TableHead>MIN. LEVEL</TableHead>
            <TableHead>STOCK LEVEL</TableHead>
            <TableHead>EXPIRY</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i} className="hover:bg-green-700/20">
              {/* Product */}
              <TableCell className="font-medium">{item.name}</TableCell>

              {/* Category */}
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getCategoryStyle(
                    item.category,
                  )}`}
                >
                  {item.category}
                </span>
              </TableCell>

              {/* Stock */}
              <TableCell className="font-bold text-red-500">
                {item.stock}
              </TableCell>

              {/* Min */}
              <TableCell className="text-gray-400">{item.min}</TableCell>

              {/* Level */}
              <TableCell>
                <div className="w-[140px] space-y-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${getLevelColor(
                        item.level,
                      )}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>

                  <p className={`text-xs ${getTextColor(item.level)}`}>
                    {item.percent}% · {item.level}
                  </p>
                </div>
              </TableCell>

              {/* Expiry */}
              <TableCell
                className={
                  item.level === "Critical" ? "text-red-500" : "text-gray-500"
                }
              >
                {item.expiry}
              </TableCell>

              {/* Action */}
              <TableCell>
                {item.level === "Good" || item.level === "Excellent" ? (
                  <Button variant="outline" size="sm" disabled>
                    OK
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300"
                  >
                    Reorder
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
