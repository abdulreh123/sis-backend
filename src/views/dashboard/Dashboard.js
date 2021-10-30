import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import { useSelector} from 'react-redux'
import CIcon from '@coreui/icons-react'
import Timetable from 'react-timetable-events'
import AdvisorDashboard from './AdvisorDashboard'
import ChairmanDashboard from './ChairmanDashboard'
import StudentDashboard from './StudentDashboard'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
   const status = useSelector(state => state.auth.user?.status)
  return (
    <>
   {status==="Advisor"?
  <AdvisorDashboard />:null
  }
   {status==="Student"?
  <StudentDashboard />:null
  }
   {status==="Chairman"?
  <ChairmanDashboard />:null
  }
  </>
  )
}

export default Dashboard
