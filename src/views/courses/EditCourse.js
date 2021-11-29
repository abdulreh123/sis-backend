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
  fetchDepartment
} from "../../actions/departmentActions";
import {
    updateCourse,
    fetchCourses
} from "../../actions/coursesActions";
import { useSelector, useDispatch } from "react-redux";
const Modals = (props) => {
    const [data, setData] = useState({});
    const [department, setDepartment] = useState(0);
    const dispatch = useDispatch();
    const departments = useSelector((state) => state.department.departments);
    const courses = useSelector((state) => state.courses.courses);
    const course = useSelector((state) => state.courses.course);
   
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name==='departmentId'){
            setDepartment(value)
        }
        setData({
            ...data,
            [name]: value
        })
    }
    const pre= courses.filter(course=> course.departmentId==department )
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCourse({ ...data },course.id));
        document.getElementById("resetCourse").reset()
    }
    useEffect(() => {
        dispatch(fetchDepartment());
        dispatch(fetchCourses());
    }, [dispatch]);
  return (
    <CRow>
          <CCardBody>
              <CModal 
              show={props.modal} 
              onClose={() => props.setModal(!props.modal)}
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
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} defaultValue={course?.name} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Code</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="code" onChange={handleChange} defaultValue={course?.code }/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Semester</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="semester" onChange={handleChange} defaultValue={course?.semester}/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Department
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="departmentId" id="select" onChange={handleChange} >
                                    <option value="0">Please select</option>
                                    {departments.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Prerequisites
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="prerequisites" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {pre.map(dep=>
                                    <option value={dep.code}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Credit</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="credit" onChange={handleChange} defaultValue={course?.credit} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">ECT5</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="ECT5" onChange={handleChange} defaultValue={course?.ECT5} />
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={(e) => {props.setModal(!props.modal);handleSubmit(e)}}>
                  Save changes
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
