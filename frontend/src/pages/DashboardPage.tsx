import React, { useState, useEffect, useRef } from 'react'
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  FileEdit,
  Calendar,
  Bell,
  LogOut,
  User,
  CalendarDays,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { SimpleButton, SimpleInput, CheckBox } from '../design-system'
import { moodleApi } from '../services/api'
import type { Course, Grade, Assignment, MoodleEvent, Notification, CourseStatistics, CourseModule } from '../types'
import AssignmentModal from '../components/AssignmentModal'
import ScheduleView from '../components/ScheduleView'
import { ThemeSwitcher } from '../theme/ThemeSwitcher'
import { useToast } from '../components/ui/Toast'
import { Spinner } from '../components/ui/Spinner'
import { Tag } from '../components/ui/Tag'
import { Empty } from '../components/ui/Empty'
import { Select } from '../components/ui/Select'
import styles from './DashboardPage.module.scss'

type NavKey = 'overview' | 'courses' | 'grades' | 'assignments' | 'schedule' | 'events'

const DashboardPage: React.FC = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const [collapsed, setCollapsed] = useState(false)
  const [activeKey, setActiveKey] = useState<NavKey>('overview')
  const [loading, setLoading] = useState(true)
  const [notifOpen, setNotifOpen] = useState(false)
  const notifRef = useRef<HTMLDivElement>(null)

  const [data, setData] = useState<{
    courses: Course[]
    grades: Grade[]
    assignments: Assignment[]
    events: MoodleEvent[]
    notifications: Notification[]
    unreadCount: number
    statistics: CourseStatistics | null
  }>({
    courses: [],
    grades: [],
    assignments: [],
    events: [],
    notifications: [],
    unreadCount: 0,
    statistics: null,
  })

  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [hideCompleted, setHideCompleted] = useState(false)

  const [isAssignmentModalVisible, setIsAssignmentModalVisible] = useState(false)
  const [selectedAssignmentModule, setSelectedAssignmentModule] = useState<CourseModule | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const params: Record<string, string | number> = { sortByDate: sortOrder }
      if (dateFrom) params.dateFrom = Math.floor(new Date(dateFrom).getTime() / 1000)
      if (dateTo) params.dateTo = Math.floor(new Date(dateTo).getTime() / 1000)
      if (hideCompleted) params.status = 'not_completed'

      const [coursesRes, gradesRes, assignmentsRes, eventsRes, notificationsRes, statsRes] = await Promise.all([
        moodleApi.getCourses(),
        moodleApi.getGrades(),
        moodleApi.getAssignments(params),
        moodleApi.getEvents(),
        moodleApi.getNotifications(),
        moodleApi.getStatistics(),
      ])

      setData({
        courses: coursesRes.data,
        grades: gradesRes.data.grades,
        assignments: assignmentsRes.data,
        events: eventsRes.data,
        notifications: notificationsRes.data.notifications,
        unreadCount: notificationsRes.data.unreadCount,
        statistics: statsRes.data,
      })
    } catch (error) {
      console.error(error)
      toast.error('Ошибка загрузки данных. Пожалуйста, убедитесь, что бэкенд запущен.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login')
      return
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, sortOrder, dateFrom, dateTo, hideCompleted])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  const menuItems: { key: NavKey; icon: React.ReactNode; label: string }[] = [
    { key: 'overview', icon: <LayoutDashboard size={18} />, label: 'Обзор' },
    { key: 'courses', icon: <BookOpen size={18} />, label: 'Курсы' },
    { key: 'grades', icon: <ClipboardList size={18} />, label: 'Оценки' },
    { key: 'assignments', icon: <FileEdit size={18} />, label: 'Задания' },
    { key: 'schedule', icon: <CalendarDays size={18} />, label: 'Расписание' },
    { key: 'events', icon: <Calendar size={18} />, label: 'События' },
  ]

  const renderOverview = () => (
    <div className={styles.stack}>
      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Всего курсов</div>
          <div className={styles.statValue}>
            <BookOpen size={20} />
            {data.statistics?.total || 0}
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Заданий</div>
          <div className={styles.statValue}>
            <FileEdit size={20} />
            {data.assignments.length}
          </div>
        </div>
      </div>

      <div className={styles.split}>
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3>Последние курсы</h3>
            <SimpleButton type="button" variant="secondary" size="small" isTransparent onClick={() => setActiveKey('courses')}>
              Все
            </SimpleButton>
          </div>
          {data.courses.length > 0 ? (
            <div className={styles.list}>
              {data.courses.slice(0, 3).map((course) => (
                <div key={course.id} className={styles.listItem}>
                  <div className={styles.listTitle}>{course.fullname}</div>
                  <div className={styles.muted}>{course.shortname}</div>
                </div>
              ))}
            </div>
          ) : (
            <Empty description="Курсы не найдены" />
          )}
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3>Ближайшие события</h3>
            <SimpleButton type="button" variant="secondary" size="small" isTransparent onClick={() => setActiveKey('events')}>
              Все
            </SimpleButton>
          </div>
          {data.events.length > 0 ? (
            <div className={styles.list}>
              {data.events.slice(0, 4).map((event) => (
                <div key={event.id} className={styles.listItem}>
                  <div className={styles.listTitle}>
                    {event.url ? (
                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                        {event.name}
                      </a>
                    ) : (
                      event.name
                    )}
                  </div>
                  <div className={styles.muted} dangerouslySetInnerHTML={{ __html: event.formattedtime }} />
                </div>
              ))}
            </div>
          ) : (
            <Empty description="События не найдены" />
          )}
        </section>
      </div>
    </div>
  )

  const renderCourses = () =>
    data.courses.length > 0 ? (
      <div className={styles.courseGrid}>
        {data.courses.map((course) => (
          <article key={course.id} className={styles.courseCard}>
            <div className={styles.courseCardHeader}>
              <h3>{course.fullname}</h3>
              <Tag tone="info">{course.shortname}</Tag>
            </div>
            <p className={styles.courseSummary}>{course.summary || 'Нет описания'}</p>
            <SimpleButton
              type="button"
              variant="secondary"
              size="small"
              isTransparent
              onClick={() => navigate(`/courses/${course.id}/contents`)}
            >
              Просмотр контента
            </SimpleButton>
          </article>
        ))}
      </div>
    ) : (
      <Empty description="Курсы не найдены" />
    )

  const renderGrades = () => {
    const validGrades = data.grades.filter((g) => {
      const isZero = g.grade === '0' || g.grade === '0.00' || g.rawgrade === 0
      const isEmpty = !g.grade || g.grade === '-'
      return !isZero && !isEmpty
    })

    if (validGrades.length === 0) {
      return <Empty description="Оценки не найдены" />
    }

    return (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Курс</th>
              <th>Оценка</th>
            </tr>
          </thead>
          <tbody>
            {validGrades.map((g) => (
              <tr key={g.course_name}>
                <td>{g.course_name}</td>
                <td>
                  <Tag tone="success">{g.grade}</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderAssignments = () => (
    <div className={styles.stack}>
      <div className={styles.filters}>
        <SimpleInput
          type="date"
          size="medium"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          aria-label="Дата от"
        />
        <SimpleInput
          type="date"
          size="medium"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          aria-label="Дата до"
        />
        <Select
          value={sortOrder}
          onChange={(v) => setSortOrder(v as 'asc' | 'desc')}
          options={[
            { value: 'asc', label: 'Сначала старые' },
            { value: 'desc', label: 'Сначала новые' },
          ]}
        />
        <label className={styles.checkLabel}>
          <CheckBox
            variant="primary"
            checked={hideCompleted}
            onChange={(e) => setHideCompleted(e.target.checked)}
          />
          Скрыть выполненные
        </label>
      </div>

      {data.assignments.length > 0 ? (
        data.assignments.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.assignmentCard}
            onClick={() => {
              setSelectedAssignmentModule({
                id: item.id,
                instance: item.id,
                name: item.name,
                modname: 'assign',
                description: item.description,
                contents: [],
              })
              setIsAssignmentModalVisible(true)
            }}
          >
            <div className={styles.assignmentTop}>
              <div>
                <div className={styles.listTitle}>{item.name}</div>
                <div className={styles.muted}>{item.courseName}</div>
              </div>
              <Tag tone="warning">Срок: {new Date(item.duedate * 1000).toLocaleDateString()}</Tag>
            </div>
            <div
              className={styles.htmlSnippet}
              dangerouslySetInnerHTML={{
                __html:
                  item.description.length > 200
                    ? item.description.substring(0, 200) + '...'
                    : item.description,
              }}
            />
          </button>
        ))
      ) : (
        <Empty description="Задания не найдены" />
      )}
    </div>
  )

  const renderEvents = () =>
    data.events.length > 0 ? (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Событие</th>
              <th>Курс</th>
              <th>Время</th>
              <th>Тип</th>
            </tr>
          </thead>
          <tbody>
            {data.events.map((event) => (
              <tr key={event.id}>
                <td>
                  {event.url ? (
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      {event.name}
                    </a>
                  ) : (
                    event.name
                  )}
                </td>
                <td>{event.courseName}</td>
                <td dangerouslySetInnerHTML={{ __html: event.formattedtime }} />
                <td>
                  <Tag>{event.eventtype}</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <Empty description="События не найдены" />
    )

  const contentMap: Record<NavKey, React.ReactNode> = {
    overview: renderOverview(),
    courses: renderCourses(),
    grades: renderGrades(),
    assignments: renderAssignments(),
    events: renderEvents(),
    schedule: <ScheduleView />,
  }

  return (
    <div className={`${styles.layout} ${collapsed ? styles.collapsed : ''}`}>
      <aside className={styles.sider}>
        <div className={styles.brand}>
          <span>{collapsed ? 'U' : 'UNiVerse'}</span>
          <SimpleButton
            type="button"
            variant="secondary"
            size="small"
            isTransparent
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? 'Развернуть меню' : 'Свернуть меню'}
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </SimpleButton>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`${styles.navItem} ${activeKey === item.key ? styles.active : ''}`}
              onClick={() => setActiveKey(item.key)}
              title={item.label}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className={styles.siderFooter}>
          <ThemeSwitcher compact showLabel={!collapsed} className={styles.themeBtn} />
          <SimpleButton
            type="button"
            variant="secondary"
            size="medium"
            isTransparent
            onClick={handleLogout}
            className={styles.logoutBtn}
          >
            <LogOut size={18} />
            {!collapsed && <span>Выйти</span>}
          </SimpleButton>
        </div>
      </aside>

      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerRight}>
            <div className={styles.notifWrap} ref={notifRef}>
              <SimpleButton
                type="button"
                variant="secondary"
                size="medium"
                isTransparent
                onClick={() => setNotifOpen((v) => !v)}
                aria-label="Уведомления"
              >
                <Bell size={18} />
                {data.unreadCount > 0 && <span className={styles.badge}>{data.unreadCount}</span>}
              </SimpleButton>
              {notifOpen && (
                <div className={styles.notifDropdown}>
                  <div className={styles.notifHeader}>
                    <strong>Уведомления</strong>
                    {data.unreadCount > 0 && <Tag tone="info">{data.unreadCount} новых</Tag>}
                  </div>
                  <div className={styles.notifList}>
                    {data.notifications.length > 0 ? (
                      data.notifications.map((item) => (
                        <div key={item.id} className={`${styles.notifItem} ${item.read ? '' : styles.unread}`}>
                          <div className={styles.notifSubject}>{item.subject}</div>
                          <div
                            className={styles.muted}
                            dangerouslySetInnerHTML={{
                              __html:
                                item.message.length > 100
                                  ? item.message.substring(0, 100) + '...'
                                  : item.message,
                            }}
                          />
                          <div className={styles.notifTime}>
                            {new Date(item.timecreated * 1000).toLocaleString()}
                          </div>
                        </div>
                      ))
                    ) : (
                      <Empty description="Нет уведомлений" />
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.user}>
              <span className={styles.avatar}>
                <User size={16} />
              </span>
              <span>Студент</span>
            </div>
          </div>
        </header>

        <main className={styles.content}>
          <h2 className={styles.pageTitle}>{menuItems.find((i) => i.key === activeKey)?.label}</h2>
          {loading ? <Spinner size="large" tip="Загрузка данных..." /> : contentMap[activeKey]}

          <AssignmentModal
            visible={isAssignmentModalVisible}
            onClose={() => {
              setIsAssignmentModalVisible(false)
              setSelectedAssignmentModule(null)
            }}
            module={selectedAssignmentModule}
          />
        </main>
      </div>
    </div>
  )
}

export default DashboardPage
