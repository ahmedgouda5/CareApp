"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Dot,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Tabs, TabsContent } from "../ui/tabs";
import { useId, useState } from "react";
import { ArrowDownToLine } from "lucide-react";

type SalesRange = "7D" | "1M" | "1Y";

interface SalesDataPoint {
  month: string;
  revenue: number;
  orders: number;
}

interface SalesChartProps {
  title?: string;
  subtitle?: string;
  data?: Record<SalesRange, SalesDataPoint[]>;
}

const defaultSalesData: Record<SalesRange, SalesDataPoint[]> = {
  "7D": [
    { month: "Oct", revenue: 9200, orders: 180 },
    { month: "Nov", revenue: 10100, orders: 210 },
    { month: "Dec", revenue: 9800, orders: 196 },
    { month: "Jan", revenue: 11300, orders: 240 },
    { month: "Feb", revenue: 12500, orders: 268 },
    { month: "Mar", revenue: 11900, orders: 252 },
    { month: "Apr", revenue: 12850, orders: 284 },
  ],
  "1M": [
    { month: "Jan", revenue: 10200, orders: 210 },
    { month: "Feb", revenue: 11600, orders: 242 },
    { month: "Mar", revenue: 12100, orders: 248 },
    { month: "Apr", revenue: 12900, orders: 266 },
  ],
  "1Y": [
    { month: "May", revenue: 7600, orders: 145 },
    { month: "Jun", revenue: 8400, orders: 162 },
    { month: "Jul", revenue: 9100, orders: 178 },
    { month: "Aug", revenue: 10300, orders: 204 },
    { month: "Sep", revenue: 11700, orders: 232 },
    { month: "Oct", revenue: 12200, orders: 246 },
    { month: "Nov", revenue: 13400, orders: 275 },
    { month: "Dec", revenue: 14100, orders: 291 },
    { month: "Jan", revenue: 14950, orders: 314 },
    { month: "Feb", revenue: 15700, orders: 329 },
    { month: "Mar", revenue: 16300, orders: 340 },
    { month: "Apr", revenue: 17150, orders: 358 },
  ],
};

const chartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#22c55e",
  },
  orders: {
    label: "Orders",
    color: "#3b82f6",
  },
};

function DotPoint(props: React.ComponentProps<typeof Dot>) {
  return (
    <Dot r={3.5} strokeWidth={2} className="stroke-background" {...props} />
  );
}

function SalesAreaChart({
  data,
  gradientId,
}: {
  data: SalesDataPoint[];
  gradientId: string;
}) {
  return (
    <ChartContainer config={chartConfig} className="h-100 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ left: 8, right: 8, top: 8, bottom: 4 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-revenue)"
                stopOpacity={0.35}
              />
              <stop
                offset="95%"
                stopColor="var(--color-revenue)"
                stopOpacity={0.03}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            horizontal={true}
            vertical={true}
            strokeDasharray="3 3"
            stroke="rgba(0,0,0,0.08)"
          />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="revenue"
            orientation="left"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => `$${value / 1000}k`}
          />
          <YAxis
            yAxisId="orders"
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            yAxisId="revenue"
            dataKey="revenue"
            type="monotone"
            stroke="var(--color-revenue)"
            strokeWidth={2.5}
            fill={`url(#${gradientId})`}
            dot={<DotPoint fill="var(--color-revenue)" />}
            activeDot={{ r: 5 }}
          />
          <Line
            yAxisId="orders"
            dataKey="orders"
            type="monotone"
            stroke="var(--color-orders)"
            strokeWidth={2.5}
            dot={<DotPoint fill="var(--color-orders)" />}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function ReportsCharts({
  title = "Revenue Trend",
  subtitle = "Monthly revenue - Jan-Apr 2026",
  data = defaultSalesData,
}: SalesChartProps) {
  const [range, setRange] = useState<SalesRange>("1M");
  const gradientId = useId().replace(/:/g, "");

  return (
    <Card className="h-full rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">
      <CardHeader className="flex flex-col gap-4 pb-0 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
        <Tabs
          value={range}
          onValueChange={(value) => setRange(value as SalesRange)}
          className="w-auto"
        >
          <div className="px-7 py-2 bg-gray-200 flex items-center  gap-2 dark:bg-gray-800 rounded-lg border-2 ">
            <ArrowDownToLine size={15} />
            CVS
          </div>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={range}>
          <TabsContent value="7D">
            <SalesAreaChart data={data["7D"]} gradientId={`${gradientId}-7d`} />
          </TabsContent>
          <TabsContent value="1M">
            <SalesAreaChart data={data["1M"]} gradientId={`${gradientId}-1m`} />
          </TabsContent>
          <TabsContent value="1Y">
            <SalesAreaChart data={data["1Y"]} gradientId={`${gradientId}-1y`} />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-start gap-4 p-6">
        <span className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          Revenue
        </span>
        <span className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          Orders
        </span>
      </CardFooter>
    </Card>
  );
}
