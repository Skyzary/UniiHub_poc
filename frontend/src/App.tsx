import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import CourseContents from './pages/CourseContents'
import { ThemeProvider } from './theme/ThemeContext'
import { ToastProvider } from './components/ui/Toast'

const App: React.FC = () => (
  <ThemeProvider>
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/courses/:courseId/contents" element={<CourseContents />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ToastProvider>
  </ThemeProvider>
)

export default App
