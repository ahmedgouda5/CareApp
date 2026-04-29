export default function ExpiryAlerts() {
  const alerts = [
    {
      name: "Insulin Glargine",
      days: 47,
      status: "Urgent",
    },
    {
      name: "Amoxicillin 500mg",
      days: 120,
      status: "Soon",
    },
    {
      name: "Azithromycin 250mg",
      days: 150,
      status: "Soon",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl w-full md:w-[50%] shadow">
      <h2 className="font-semibold mb-4">Expiry Alerts</h2>

      <div className="space-y-3">
        {alerts.map((item, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg border ${
              item.status === "Urgent"
                ? "border-red-300 bg-red-50"
                : "border-yellow-300 bg-yellow-50"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{item.name}</p>
              <span className="text-xs px-2 py-1 rounded bg-white">
                {item.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">Expires in {item.days} days</p>
          </div>
        ))}
      </div>
    </div>
  );
}
