import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

// Parse percentage strings like "41% (250+ employees)" or "~15-20% (estimated)" to numbers
const parsePercentage = (value: string): number => {
  // Handle ranges like "~15-20%" - take the average
  const rangeMatch = value.match(/~?(\d+)-(\d+)%/);
  if (rangeMatch) {
    return (parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2;
  }
  // Handle simple percentages like "41%" or "67.6%"
  const simpleMatch = value.match(/(\d+\.?\d*)%/);
  if (simpleMatch) {
    return parseFloat(simpleMatch[1]);
  }
  return 0;
};

interface SizeClassDataRow {
  market: string;
  large: string;
  sme: string;
  gap: string;
  citations: number[];
}

interface SizeClassChartProps {
  data: SizeClassDataRow[];
}

const chartConfig = {
  largeEnterprise: {
    label: "Large Enterprise",
    color: "hsl(var(--llpa-blue))",
  },
  sme: {
    label: "SME/Small Business",
    color: "hsl(var(--llpa-orange))",
  },
};

const SizeClassChart = ({ data }: SizeClassChartProps) => {
  // Transform data for the chart, sorted by gap descending for visual impact
  const chartData = data
    .map((row) => ({
      market: row.market,
      largeEnterprise: parsePercentage(row.large),
      sme: parsePercentage(row.sme),
      gap: parsePercentage(row.large) - parsePercentage(row.sme),
    }))
    .sort((a, b) => b.gap - a.gap);

  return (
    <ChartContainer config={chartConfig} className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <defs>
            <linearGradient id="gradientLarge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--llpa-blue))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--llpa-blue))" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="gradientSME" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--llpa-orange))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--llpa-orange))" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border))"
            vertical={false}
          />
          <XAxis
            dataKey="market"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: "hsl(var(--border))" }}
            angle={-35}
            textAnchor="end"
            height={60}
            interval={0}
          />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 80]}
          />
          <Tooltip
            content={<ChartTooltipContent />}
            formatter={(value: number) => [`${value.toFixed(1)}%`]}
          />
          <Legend
            wrapperStyle={{ paddingTop: 16 }}
            iconType="square"
          />
          <Area
            type="monotone"
            dataKey="largeEnterprise"
            name="Large Enterprise"
            stroke="hsl(var(--llpa-blue))"
            strokeWidth={2}
            fill="url(#gradientLarge)"
          />
          <Area
            type="monotone"
            dataKey="sme"
            name="SME/Small Business"
            stroke="hsl(var(--llpa-orange))"
            strokeWidth={2}
            fill="url(#gradientSME)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default SizeClassChart;
