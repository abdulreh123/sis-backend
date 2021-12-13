import React,{useEffect} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'

const WidgetsDropdown = (props) => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="Students"
          text={props.students}
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="Timing"
          text="wednesday 12:30 to 1"
        >
        </CWidgetDropdown>
      </CCol>

    </CRow>
  )
}

export default WidgetsDropdown
