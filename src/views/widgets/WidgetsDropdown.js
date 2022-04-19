import React,{useEffect} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'
import { useSelector, useDispatch } from "react-redux";
import {
    getStudentStats
} from "../../actions/studentsActions";
// import ChartLineSimple from '../charts/ChartLineSimple'
// import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  const user = useSelector((state) => state.auth.user);
  const stats = useSelector((state) => state.student.stats);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStudentStats(user.Id,user.department.id));
}, [dispatch, user]);
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={stats.coursesTaken}
          text="Courses Taken"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={stats.courses-stats.coursesTaken}
          text="Courses Left"
          backgroundColor="red"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={stats.creditTaken}
          text="Crdits Taken"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={stats.credit-stats.creditTaken}
          text="Credits left"
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
