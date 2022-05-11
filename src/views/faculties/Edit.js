import React, { useState } from 'react'
import {
  CButton,
  CCardBody,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect
} from '@coreui/react'
import {
    updateFaculty
} from "../../actions/facultyActions";
import {  useDispatch,useSelector } from "react-redux";
const Modals = (props) => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const department = useSelector((state) => state.faculty.faculty);
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateFaculty({ ...data },department?.id));
        document.getElementById("resetEditDepartment").reset()
    }
  return (
    <CRow>
          <CCardBody>
              <CModal 
              show={props.modal} 
              onClose={() => props.setModal(!props.modal)}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>Update Department</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetEditDepartment">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} defaultValue={department?.name} />
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={(e) => {props.setModal(!props.modal);handleSubmit(e)}}>
                  Update
                </CButton>{' '}
                <CButton color="secondary" onClick={() =>  props.setModal(!props.modal)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
          </CCardBody>
    </CRow>
  )
}

export default Modals
