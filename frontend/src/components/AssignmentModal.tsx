import React, { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import { SimpleButton, FileInput, SimpleForm } from '../design-system'
import { moodleApi } from '../services/api'
import type { CourseModule } from '../types'
import { Modal } from './ui/Modal'
import { Spinner } from './ui/Spinner'
import { Tag } from './ui/Tag'
import { useToast } from './ui/Toast'
import styles from './AssignmentModal.module.scss'

interface AssignmentModalProps {
  visible: boolean
  onClose: () => void
  module: CourseModule | null
}

const AssignmentModal: React.FC<AssignmentModalProps> = ({ visible, onClose, module }) => {
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [uploadingFile, setUploadingFile] = useState(false)
  const [status, setStatus] = useState<{ status?: string; grade?: string } | null>(null)
  const [text, setText] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [formError, setFormError] = useState('')
  const toast = useToast()

  const fetchStatus = async () => {
    if (!module?.instance) return
    setLoading(true)
    try {
      const response = await moodleApi.getAssignmentStatus(module.instance)
      setStatus(response.data)
    } catch (error) {
      console.error(error)
      toast.error('Не удалось загрузить статус задания')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (visible && module?.instance) {
      fetchStatus()
    } else {
      setStatus(null)
      setText('')
      setFiles([])
      setFormError('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, module])

  const handleSubmit = async () => {
    if (!module?.instance) return

    if (!text.trim() && files.length === 0) {
      setFormError('Пожалуйста, введите текст решения или прикрепите файл')
      return
    }
    setFormError('')
    setSubmitting(true)
    let fileItemId: number | undefined

    try {
      if (files.length > 0) {
        setUploadingFile(true)
        const actualFile = files[0]
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(actualFile)
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = (error) => reject(error)
        })

        const uploadRes = await moodleApi.uploadFile(actualFile.name, base64)
        if (uploadRes.data && uploadRes.data.length > 0) {
          fileItemId = uploadRes.data[0].itemid
        }
      }

      await moodleApi.submitAssignment(module.instance, text, fileItemId)
      toast.success('Решение успешно отправлено')
      fetchStatus()
      setText('')
      setFiles([])
    } catch (error) {
      console.error(error)
      toast.error('Ошибка при отправке решения')
    } finally {
      setUploadingFile(false)
      setSubmitting(false)
    }
  }

  const tokenStr = localStorage.getItem('moodleToken')
  const canSubmit = !status || status.status === 'new' || status.status === 'draft'

  const statusLabel =
    status?.status === 'submitted'
      ? 'Сдано на проверку'
      : status?.status === 'graded'
        ? 'Оценено'
        : status?.status === 'new'
          ? 'Нет попытки'
          : status?.status

  return (
    <Modal open={visible} onClose={onClose} title={module?.name || 'Задание'}>
      {loading ? (
        <Spinner tip="Загрузка статуса..." />
      ) : (
        <div className={styles.content}>
          {module?.description && (
            <section>
              <h4>Описание</h4>
              <div
                className={styles.box}
                dangerouslySetInnerHTML={{ __html: module.description }}
              />
            </section>
          )}

          {module?.contents && module.contents.length > 0 && (
            <section>
              <h4>Прикрепленные файлы</h4>
              <ul className={styles.fileList}>
                {module.contents.map((file: { filename?: string; fileurl?: string }, idx: number) => {
                  const url = (file.fileurl || '') + (tokenStr ? `?token=${tokenStr}` : '')
                  return (
                    <li key={`${file.filename}-${idx}`} className={styles.fileItem}>
                      <span>{file.filename}</span>
                      <SimpleButton
                        isLink
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="small"
                      >
                        <Download size={14} /> Скачать
                      </SimpleButton>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          <section>
            <h4>Статус сдачи</h4>
            {status ? (
              <div className={styles.box}>
                <div className={styles.statusRow}>
                  <strong>Статус: </strong>
                  <Tag tone={status.status === 'submitted' || status.status === 'graded' ? 'success' : 'warning'}>
                    {statusLabel}
                  </Tag>
                </div>
                {status.grade && (
                  <div>
                    <strong>Оценка: </strong>
                    <span>{status.grade}</span>
                  </div>
                )}
              </div>
            ) : (
              <p className={styles.muted}>Нет данных о статусе</p>
            )}
          </section>

          {canSubmit && (
            <section>
              <h4>Отправить решение</h4>
              <SimpleForm variant="simple" action={handleSubmit} className={styles.form}>
                <label className={styles.field}>
                  <span>Текст ответа</span>
                  <textarea
                    className={styles.textarea}
                    rows={6}
                    placeholder="Введите ваш ответ здесь..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name="text"
                  />
                </label>

                <FileInput
                  label="Прикрепить файл"
                  files={files}
                  onFilesChange={setFiles}
                  maxFiles={1}
                  size="small"
                  dragText="Перетащите файл сюда или"
                  browseText="выберите"
                />

                {formError && <p className={styles.error}>{formError}</p>}

                <div className={styles.actions}>
                  <SimpleButton type="button" variant="secondary" size="medium" onClick={onClose} disabled={submitting}>
                    Отмена
                  </SimpleButton>
                  <SimpleButton type="submit" variant="primary" size="medium" disabled={submitting || uploadingFile}>
                    {uploadingFile ? 'Загрузка файла...' : 'Отправить'}
                  </SimpleButton>
                </div>
              </SimpleForm>
            </section>
          )}
        </div>
      )}
    </Modal>
  )
}

export default AssignmentModal
