import React, { useMemo } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from 'recharts'
import type { Grade } from '../types'
import { getValidGrades, getGradeBarColor } from '../utils/grades'
import { Empty } from './ui/Empty'
import styles from './GradesChart.module.scss'

type GradesChartProps = {
  grades: Grade[]
}

const Y_AXIS_WIDTH = 160
const LABEL_MAX = 22

function truncateLabel(value: string): string {
  if (value.length <= LABEL_MAX) return value
  return `${value.slice(0, LABEL_MAX - 1)}…`
}

export const GradesChart: React.FC<GradesChartProps> = ({ grades }) => {
  const validGrades = useMemo(() => getValidGrades(grades), [grades])

  const chartData = useMemo(
    () =>
      validGrades.map((g) => ({
        name: g.course_name,
        value: g.rawgrade ?? (Number.parseFloat(g.grade) || 0),
        rawgrade: g.rawgrade,
      })),
    [validGrades]
  )

  if (chartData.length === 0) {
    return <Empty description="Оценки не найдены" />
  }

  const chartHeight = Math.max(240, chartData.length * 44)

  return (
    <div className={styles.wrap}>
      <div className={styles.chart} style={{ height: chartHeight }}>
        <ResponsiveContainer width="100%" height={chartHeight} debounce={50}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 4, right: 12, left: 4, bottom: 4 }}
          >
            <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
              axisLine={{ stroke: 'var(--border-color)' }}
              tickLine={{ stroke: 'var(--border-color)' }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={Y_AXIS_WIDTH}
              tickFormatter={truncateLabel}
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
              axisLine={{ stroke: 'var(--border-color)' }}
              tickLine={false}
              interval={0}
            />
            <Tooltip
              contentStyle={{
                background: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius-medium)',
                color: 'var(--text-primary)',
              }}
              labelStyle={{ color: 'var(--text-primary)' }}
              formatter={(value) => [value ?? 0, 'Оценка']}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={22} isAnimationActive={false}>
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={getGradeBarColor(entry.rawgrade)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
