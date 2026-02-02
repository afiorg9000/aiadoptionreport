import React from "react";
import { typography } from "./styles";

interface Column {
  key: string;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
}

interface DataTableStandardProps {
  columns: Column[];
  data: Record<string, React.ReactNode>[];
  rowClassName?: (row: Record<string, React.ReactNode>, index: number) => string;
}

const DataTableStandard = ({
  columns,
  data,
  rowClassName,
}: DataTableStandardProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-foreground">
            {columns.map((col, idx) => (
              <th
                key={col.key}
                className={`py-3 font-semibold text-foreground ${
                  idx === 0
                    ? "pr-4 text-left"
                    : idx === columns.length - 1
                      ? "pl-4 text-left"
                      : "px-4 text-left"
                } ${col.width || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-border ${rowClassName?.(row, rowIdx) || ""}`}
            >
              {columns.map((col, colIdx) => (
                <td
                  key={col.key}
                  className={`py-3 ${
                    colIdx === 0
                      ? `pr-4 ${typography.emphasis}`
                      : colIdx === columns.length - 1
                        ? "pl-4 text-muted-foreground"
                        : "px-4 text-muted-foreground"
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableStandard;
