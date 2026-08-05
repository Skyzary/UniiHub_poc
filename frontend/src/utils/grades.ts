import type { Grade } from '../types'

export function getValidGrades(grades: Grade[]): Grade[] {
  return grades.filter((g) => {
    const isZero = g.grade === '0' || g.grade === '0.00' || g.rawgrade === 0
    const isEmpty = !g.grade || g.grade === '-'
    return !isZero && !isEmpty
  })
}

export function getGradeTone(rawgrade: number | null): 'success' | 'warning' | 'danger' {
  if (rawgrade == null) return 'warning'
  if (rawgrade >= 80) return 'success'
  if (rawgrade >= 50) return 'warning'
  return 'danger'
}

export function getGradeBarColor(rawgrade: number | null): string {
  if (rawgrade == null) return 'var(--chart-warning)'
  if (rawgrade >= 80) return 'var(--chart-success)'
  if (rawgrade >= 50) return 'var(--chart-warning)'
  return 'var(--chart-danger)'
}
