import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";

const alerts = [
  {
    name: "Amoxicillin 500mg",
    message: "Only 8 units left",
    status: "Critical",
  },
  {
    name: "Insulin Glargine",
    message: "Only 3 units left",
    status: "Critical",
  },
  {
    name: "Metformin 1g",
    message: "24 units remaining",
    status: "Low",
  },
  {
    name: "Omeprazole 20mg",
    message: "19 units remaining",
    status: "Low",
  },
];

const statusStyles = {
  Critical: {
    card: "border-red-200 bg-red-50",
    badge: "bg-red-100 text-red-600",
    text: "text-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  Low: {
    card: "border-yellow-200 bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-600",
    text: "text-yellow-600",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
};

export function StockAlertTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-yellow-500" size={20} />
          <h3 className="font-semibold text-lg">Stock Alerts</h3>
        </div>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
          • 5 Critical
        </span>
      </div>

      {/* Alerts */}
      <div className="p-4 space-y-3">
        {alerts.map((alert, index) => {
          const style = statusStyles[alert.status];

          return (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-xl border ${style.card}`}
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl ${style.iconBg}`}
                >
                  <AlertTriangle className={style.iconColor} size={18} />
                </div>

                <div>
                  <h4 className="font-medium">{alert.name}</h4>
                  <p className={`text-sm ${style.text}`}>{alert.message}</p>
                </div>
              </div>

              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${style.badge}`}
              >
                • {alert.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full rounded-xl flex justify-center gap-2"
        >
          View All Alerts →
        </Button>
      </div>
    </div>
  );
}
