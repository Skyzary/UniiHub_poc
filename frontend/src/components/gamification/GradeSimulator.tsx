import React, { useMemo, useState } from 'react'
import type { Assignment, Grade } from '../../types'
import { computeSimulatedFinal } from '../../utils/gradeMath'
import { getValidGrades, getGradeTone } from '../../utils/grades'
import { useCountUp } from '../../hooks/useCountUp'
import { Modal } from '../ui/Modal'
import { Select } from '../ui/Select'
import { ProgressBar } from '../ui/ProgressBar'
import { Empty } from '../ui/Empty'
import { SimpleButton } from '../../design-system'
import styles from './GradeSimulator.module.scss'

type GradeSimulatorProps = {
  open: boolean
  onClose: () => void
  grades: Grade[]
  assignments: Assignment[]
}

export const GradeSimulator: React.FC<GradeSimulatorProps> = ({
  open,
  onClose,
  grades,
  assignments,
}) => {
  const validGrades = useMemo(() => getValidGrades(grades), [grades])

  const courseOptions = useMemo(
    () =>
      validGrades.map((g) => ({
        value: g.course_name,
        label: g.course_name,
      })),
    [validGrades]
  )

  const [courseName, setCourseName] = useState('')
  const selectedCourse = courseName || courseOptions[0]?.value || ''

  const currentGrade = validGrades.find((g) => g.course_name === selectedCourse)
  const currentScore = currentGrade?.rawgrade ?? (currentGrade ? Number.parseFloat(currentGrade.grade) || 0 : 0)

  const remaining = useMemo(() => {
    if (!selectedCourse) return []
    const key = selectedCourse.trim().toLowerCase()
    return assignments.filter((a) => a.courseName.trim().toLowerCase() === key)
  }, [assignments, selectedCourse])

  const [scores, setScores] = useState<Record<number, number>>({})

  const remainingValues = remaining.map((a) => scores[a.id] ?? 75)
  const finalScore = computeSimulatedFinal(currentScore, remainingValues)
  const animatedFinal = useCountUp(Math.round(finalScore), 400, open)
  const tone = getGradeTone(finalScore)

  const setScore = (id: number, value: number) => {
    setScores((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <Modal open={open} onClose={onClose} title="Симулятор оценок — «Что, если?»" width={560}>
      {validGrades.length === 0 ? (
        <Empty description="Нет оценок для симуляции" />
      ) : (
        <div className={styles.body}>
          <p className={styles.hint}>
            Текущая оценка курса — 70% итога. Гипотетические работы делят оставшиеся 30%.
          </p>

          <Select
            value={selectedCourse}
            onChange={setCourseName}
            options={courseOptions}
            aria-label="Курс"
          />

          <div className={styles.forecast}>
            <div className={styles.forecastLabel}>Прогноз итога</div>
            <div className={styles.forecastValue}>{animatedFinal}</div>
            <ProgressBar value={finalScore} tone={tone} />
          </div>

          {remaining.length === 0 ? (
            <Empty description="Нет заданий по этому курсу — показываем только текущую оценку" />
          ) : (
            <div className={styles.list}>
              {remaining.map((a) => {
                const value = scores[a.id] ?? 75
                return (
                  <label key={a.id} className={styles.row}>
                    <div className={styles.rowTop}>
                      <span className={styles.name}>{a.name}</span>
                      <span className={styles.score}>{value}</span>
                    </div>
                    <input
                      className={styles.slider}
                      type="range"
                      min={0}
                      max={100}
                      value={value}
                      onChange={(e) => setScore(a.id, Number(e.target.value))}
                    />
                  </label>
                )
              })}
            </div>
          )}
        </div>
      )}
    </Modal>
  )
}

type GradeSimulatorTriggerProps = {
  onOpen: () => void
}

export const GradeSimulatorTrigger: React.FC<GradeSimulatorTriggerProps> = ({ onOpen }) => (
  <SimpleButton type="button" variant="secondary" size="small" onClick={onOpen}>
    Что, если?
  </SimpleButton>
)
