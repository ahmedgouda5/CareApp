import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

interface CategoryDatum {
  label: string;
  value: number;
  fill: string;
}

interface CategoryPieProps {
  title?: string;
  subtitle?: string;
  data?: CategoryDatum[];
}

const categoryData: CategoryDatum[] = [
  { label: "Antibiotics", value: 34, fill: "#22c55e" },
  { label: "Analgesics", value: 26, fill: "#3b82f6" },
  { label: "Vitamins", value: 22, fill: "#eab308" },
  { label: "Other", value: 18, fill: "#a855f7" },
];

const chartConfig: ChartConfig = {
  Antibiotics: { label: "Antibiotics", color: "#22c55e" },
  Analgesics: { label: "Analgesics", color: "#3b82f6" },
  Vitamins: { label: "Vitamins", color: "#eab308" },
  Other: { label: "Other", color: "#a855f7" },
};

export function CategoryPie({
  title = "Category Split",
  subtitle = "Product distribution by revenue share",
  data = categoryData,
}: CategoryPieProps) {
  return (
    <Card className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">
      <CardHeader className="pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius={70}
                outerRadius={105}
                paddingAngle={2}
                strokeWidth={0}
              >
                {data.map((entry) => (
                  <Cell key={entry.label} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-4 space-y-3">
          {data.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-muted-foreground">{item.label}</span>
              </div>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
