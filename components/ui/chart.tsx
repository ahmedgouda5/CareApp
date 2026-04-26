"use client";

import * as React from "react";
import {
  Legend as RechartsLegend,
  Tooltip as RechartsTooltip,
  type TooltipProps,
} from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { cn } from "../../lib/utils";

export type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
  }
>;

const ChartContext = React.createContext<ChartConfig | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within <ChartContainer />");
  }
  return context;
}

function ChartContainer({
  id,
  className,
  config,
  children,
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
}) {
  const style = React.useMemo(() => {
    return Object.entries(config).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        acc[`--color-${key}`] = value.color;
        return acc;
      },
      {},
    ) as React.CSSProperties;
  }, [config]);

  return (
    <ChartContext.Provider value={config}>
      <div
        data-slot="chart"
        data-chart={id}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/60 [&_.recharts-legend-item-text]:text-foreground [&_.recharts-layer.recharts-area-dots_circle]:stroke-background [&_.recharts-reference-line_line]:stroke-border [&_.recharts-sector]:outline-none",
          className,
        )}
        style={style}
      >
        {children}
      </div>
    </ChartContext.Provider>
  );
}

const ChartTooltip = RechartsTooltip;
const ChartLegend = RechartsLegend;

function ChartTooltipContent({
  active,
  payload,
  className,
}: TooltipProps<ValueType, NameType> & {
  className?: string;
}) {
  const config = useChart();
  if (!active || !payload?.length) return null;

  return (
    <div
      className={cn(
        "min-w-40 rounded-lg border border-border/60 bg-background/95 px-3 py-2 text-xs shadow-md backdrop-blur-sm",
        className,
      )}
    >
      <div className="space-y-1.5">
        {payload.map((item) => {
          const key = String(item.dataKey);
          const meta = config[key];
          const color = item.color || meta?.color || "currentColor";

          return (
            <div key={key} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-muted-foreground">
                  {meta?.label ?? item.name}
                </span>
              </div>
              <span className="font-medium text-foreground">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent };
