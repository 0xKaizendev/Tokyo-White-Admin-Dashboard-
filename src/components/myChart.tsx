import React, { useRef, useEffect } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

type Props = {
  colors: {
    lineColor: string;
    fillColor: string;
  };
  data: ChartData<"line", number[], string>;
  options: ChartOptions<"line">;
};

const LineChart: React.FC<Props> = ({ colors, data: initialData, options: initialOptions }) => {
  const { lineColor, fillColor } = colors;

  const chartRef = useRef<Chart<"line", number[], string> | null>(null);

  useEffect(() => {
    const data = {
      ...initialData,
      datasets: initialData.datasets.map((dataset) => ({
        ...dataset,
        borderColor: lineColor,
        backgroundColor: fillColor,
      })),
    };

    const options = {
      ...initialOptions,
      plugins: {
        ...initialOptions.plugins,
        filler: {
          propagate: false,
        },
      },
      scales: {
        ...initialOptions.scales,
        x: {
          ...initialOptions.scales?.x,
          grid: {
            ...initialOptions.scales?.x?.grid,
            display: false,
          },
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.data = data;
      chartRef.current.options = options;
      chartRef.current.update();
    } else {
      chartRef.current = new Chart("myChart", {
        type: "line",
        data,
        options,
      });
    }
  }, [lineColor, fillColor, initialData, initialOptions]);

  return (
    <div>
      <Line
        data={initialData}
        options={initialOptions}
        id="myChart"
        ref={chartRef as React.RefObject<Chart<"line", number[], string>>}
      />
    </div>
  );
};

export default LineChart;
