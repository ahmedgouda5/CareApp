// components/StatsCard.tsx
import React from "react";

interface StatsCardProps {
  label: string;
  value: number;
  valueColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, valueColor }) => {
  return (
    <div className="flex-1 min-w-[140px] bg-gray-100 dark:bg-gray-800 rounded-2xl  shadow-sm px-6 py-5 flex flex-col items-center justify-center gap-1">
      <span className={`text-3xl font-bold tracking-tight ${valueColor}`}>
        {value.toLocaleString()}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
  );
};

export default StatsCard;
