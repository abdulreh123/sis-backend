import React,{useEffect} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'
import { useSelector, useDispatch } from "react-redux";
import {
    getChairmanStat
} from "../../actions/studentsActions";
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  const user = useSelector((state) => state.auth.user);
  const stats = useSelector((state) => state.student.chairmanStat);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChairmanStat(user.department.id));
}, [dispatch, user]);
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={stats.courses}
          text="Total Courses"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={stats.students}
          text="Total Students"
          backgroundColor="red"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={stats.advisors}
          text="total Advisors"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={stats.totalCredits}
          text="Total Credits"
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
