import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ThankYouPage from './pages/ThankYouPage'
import AuthCallback from './pages/AuthCallback'
import RiderDashboard from './pages/RiderDashboard'
import DriverDashboard from './pages/DriverDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/auth" element={<AuthCallback />} />
      <Route
        path="/rider"
        element={
          <ProtectedRoute allowRoles={['rider', 'admin']}>
            <RiderDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/driver"
        element={
          <ProtectedRoute allowRoles={['driver', 'admin']}>
            <DriverDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
