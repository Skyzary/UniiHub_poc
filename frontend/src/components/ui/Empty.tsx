import React from 'react'
import styles from './Empty.module.scss'

type EmptyProps = {
  description?: string
}

export const Empty: React.FC<EmptyProps> = ({ description = 'Нет данных' }) => (
  <div className={styles.empty}>
    <p>{description}</p>
  </div>
)
