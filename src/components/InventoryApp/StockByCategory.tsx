export default function StockByCategory() {
  const categories = [
    { name: "Antibiotics", value: 342, color: "bg-green-500" },
    { name: "Analgesics", value: 528, color: "bg-blue-500" },
    { name: "Vitamins", value: 890, color: "bg-yellow-500" },
    { name: "Antidiabetics", value: 27, color: "bg-red-500" },
  ];

  const max = Math.max(...categories.map((c) => c.value));

  return (
    <div className="bg-white p-4 w-full md:w-full rounded-2xl shadow">
      <h2 className="font-semibold mb-4">Stock by Category</h2>

      <div className="space-y-4">
        {categories.map((cat, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span>{cat.name}</span>
              <span>{cat.value} units</span>
            </div>

            <div className="h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${cat.color}`}
                style={{ width: `${(cat.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
