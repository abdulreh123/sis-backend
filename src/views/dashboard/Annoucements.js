import React, { lazy,useEffect,useState } from 'react'
import DataTable from "react-data-table-component";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormGroup,
  CSelect,
  CButton
} from '@coreui/react'
import { useSelector, useDispatch } from "react-redux";
import {
    getGroup
} from "../../actions/groupActions";

const Annoucements = (props) => {
    const  stidentId  = props?.match?.params?.id;
  

  return (
    <>
      <CCard> 
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Annoucements</h4>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
            </CCol>
       </CRow>
        <CCardBody>
            Phy101 g1 : has been cancelled
        </CCardBody>
      </CCard>
    </>
  )
}

export default Annoucements
