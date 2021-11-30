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
import CIcon from '@coreui/icons-react'
import Timetable from 'react-timetable-events'

const WidgetsDropdown = lazy(() => import('../widgets/AdvisorDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
    <h3>
    My Courses</h3>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Your Time Table</h4>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
            </CCol>
          </CRow>
            <Timetable
                  hoursInterval= {{ from: 9, to: 20 }}
                  getDayLabel={((day) => day.slice(0,3))}
                    events={{
                      monday: [
                        {
                          id: 1,
                          name: "Phy101",
                          type: "custom",
                          startTime: new Date("2018-02-23T11:30:00"),
                          endTime: new Date("2018-02-23T13:30:00"),
                        },
                      ],
                      tuesday: [
                        {
                          id: 1,
                          name: "mth101",
                          type: "custom",
                          startTime: new Date("2018-02-24T09:30:00"),
                          endTime: new Date("2018-02-24T10:30:00"),
                        },],
                      wednesday: [],
                      thursday: [],
                      friday: [],
                    }}
                  />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
