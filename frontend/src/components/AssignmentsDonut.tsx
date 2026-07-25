import React, { useMemo, useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import type { Assignment, Grade } from '../types'
import { getValidGrades } from '../utils/grades'
import { Empty } from './ui/Empty'
import styles from './AssignmentsDonut.module.scss'

type AssignmentsDonutProps = {
  assignments: Assignment[]
  grades: Grade[]
}

const COLORS = {
  done: 'var(--success-color)',
  overdue: 'var(--error-color)',
  inProgress: 'var(--info-color)',
} as const

export const AssignmentsDonut: React.FC<AssignmentsDonutProps> = ({ assignments, grades }) => {
  const [nowSec] = useState(() => Math.floor(Date.now() / 1000))

  const segments = useMemo(() => {
    if (assignments.length === 0) return []

    const gradedCourses = new Set(
      getValidGrades(grades).map((g) => g.course_name.trim().toLowerCase())
    )

    let done = 0
    let overdue = 0
    let inProgress = 0

    for (const a of assignments) {
      const courseKey = a.courseName.trim().toLowerCase()
      const isDone = gradedCourses.has(courseKey)
      if (isDone) {
        done += 1
      } else if (a.duedate > 0 && a.duedate < nowSec) {
        overdue += 1
      } else {
        inProgress += 1
      }
    }

    const result: { name: string; value: number; color: string }[] = []
    if (done > 0) result.push({ name: 'Выполнено', value: done, color: COLORS.done })
    if (overdue > 0) result.push({ name: 'Просрочено', value: overdue, color: COLORS.overdue })
    if (inProgress > 0) result.push({ name: 'В процессе', value: inProgress, color: COLORS.inProgress })
    return result
  }, [assignments, grades, nowSec])

  if (segments.length === 0) {
    return <Empty description="Задания не найдены" />
  }

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Статус заданий</h3>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={segments}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
            >
              {segments.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius-medium)',
                color: 'var(--text-primary)',
              }}
            />
            <Legend
              wrapperStyle={{ color: 'var(--text-secondary)', fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
