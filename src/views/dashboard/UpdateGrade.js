import React, { useState,useEffect } from 'react'
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
  CSelect,
} from '@coreui/react'
import {
    updateGrade
} from "../../actions/studentsActions";
import { useSelector, useDispatch } from "react-redux";
const grades =["AA","BA","BB","CB","CC","DC","DD","FD","FF"]
const Modals = (props) => {
    const previous = props.previous
    const [data, setData] = useState({});
    const dispatch = useDispatch();
   
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
        dispatch(updateGrade({ ...data },previous.studentId,previous.courseGroupId));
        document.getElementById("resetCourse").reset()
    }
  return (
    <CRow>
          <CCardBody>
              <CModal 
              show={props.modal} 
              onClose={() => {props.setModal(!props.modal);
                setData({})}}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>Edit Course</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetCourse">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Midterm One</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="midtermOne" onChange={handleChange} defaultValue={previous?.midtermOne} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Midterm Two</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="midtermTwo" onChange={handleChange} defaultValue={previous?.midtermTwo }/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Final</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="final" onChange={handleChange} defaultValue={previous?.final}/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Grade
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="grade" id="select" onChange={handleChange} >
                                    <option value="0">Please select</option>
                                    {grades.map(dep=>
                                    <option value={dep}>{dep}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={(e) => {props.setModal(!props.modal);handleSubmit(e);
        setData({})}}>
                  Save changes
                </CButton>{' '}
                <CButton color="secondary" onClick={() => { props.setModal(!props.modal);
        setData({})}}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
          </CCardBody>
    </CRow>
  )
}

export default Modals
