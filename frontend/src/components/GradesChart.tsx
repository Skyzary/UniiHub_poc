import React, { useMemo } from 'react'
import type { Grade } from '../types'
import { getValidGrades, getGradeBarColor } from '../utils/grades'
import Chart from '../design-system/charts/Chart/Chart'

type GradesChartProps = {
  grades: Grade[]
}

export const GradesChart: React.FC<GradesChartProps> = ({ grades }) => {
  const validGrades = useMemo(() => getValidGrades(grades), [grades])

  const chartData = useMemo(
    () =>
      validGrades.map((g) => ({
        name: g.course_name,
        value: g.rawgrade ?? (Number.parseFloat(g.grade) || 0),
        color: getGradeBarColor(g.rawgrade),
      })),
    [validGrades]
  )

  return (
    <Chart
      type="bar"
      layout="horizontal"
      data={chartData}
      domain={[0, 100]}
      valueLabel="Оценка"
      emptyDescription="Оценки не найдены"
    />
  )
}
