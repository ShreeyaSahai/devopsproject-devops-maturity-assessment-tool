import { useMemo } from "react";

interface RadarChartProps {
  data: { category: string; score: number; maxScore: number }[];
  size?: number;
}

const RadarChart = ({ data, size = 300 }: RadarChartProps) => {
  const center = size / 2;
  const radius = size * 0.38;
  const levels = 4;

  const points = useMemo(() => {
    const angleStep = (2 * Math.PI) / data.length;
    return data.map((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const pct = d.score / d.maxScore;
      return {
        x: center + radius * pct * Math.cos(angle),
        y: center + radius * pct * Math.sin(angle),
        labelX: center + (radius + 28) * Math.cos(angle),
        labelY: center + (radius + 28) * Math.sin(angle),
        label: d.category,
        pct,
      };
    });
  }, [data, center, radius]);

  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");

  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const scale = (i + 1) / levels;
    const angleStep = (2 * Math.PI) / data.length;
    const pts = data.map((_, j) => {
      const angle = j * angleStep - Math.PI / 2;
      return `${center + radius * scale * Math.cos(angle)},${center + radius * scale * Math.sin(angle)}`;
    });
    return pts.join(" ");
  });

  const axisLines = data.map((_, i) => {
    const angle = (i * 2 * Math.PI) / data.length - Math.PI / 2;
    return { x2: center + radius * Math.cos(angle), y2: center + radius * Math.sin(angle) };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-md mx-auto">
      {/* Grid */}
      {gridLevels.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="hsl(220 15% 20%)"
          strokeWidth="1"
          opacity={0.6}
        />
      ))}

      {/* Axes */}
      {axisLines.map((line, i) => (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={line.x2}
          y2={line.y2}
          stroke="hsl(220 15% 20%)"
          strokeWidth="1"
          opacity={0.4}
        />
      ))}

      {/* Data polygon */}
      <polygon
        points={polygon}
        fill="hsl(175 80% 50% / 0.15)"
        stroke="hsl(175 80% 50%)"
        strokeWidth="2"
      />

      {/* Data points */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="4"
          fill="hsl(175 80% 50%)"
          className="drop-shadow-[0_0_6px_hsl(175_80%_50%)]"
        />
      ))}

      {/* Labels */}
      {points.map((p, i) => (
        <text
          key={i}
          x={p.labelX}
          y={p.labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted-foreground text-[10px] font-mono-display"
        >
          {p.label}
        </text>
      ))}
    </svg>
  );
};

export default RadarChart;
