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
    fetchAdvisor,
} from "../../actions/advisorActions";
import {
    updateStudent
} from "../../actions/studentsActions";
import { useSelector, useDispatch } from "react-redux";
const Modals = (props) => {
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const student = useSelector((state) => state.student.student);
    const advisor = useSelector((state) => state.advisor.advisors);
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name==='userId'){
            setData({
                ...data,
                [name]: parseInt(value)
            })
        }
        setData({
            ...data,
            [name]: value
        })
    }
    const handleUser = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        const create = {
            userId: data.userId,
            name: data.name,
            surname: data.surname,
            advisorId: data.advisorId,
            user: user
        }
        e.preventDefault();
        dispatch(updateStudent({ ...create },student?.id));
        document.getElementById("resetUpdateStudent").reset()
    }
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdvisor());
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
                <CModalTitle>Edit Student</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetUpdateStudent">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Student ID</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="userId" onChange={handleChange} defaultValue={student?.userId}/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} defaultValue={student?.name}/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Surname</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="surname" onChange={handleChange} defaultValue={student?.surname}/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Username</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="userName" onChange={handleUser} />
                            </CCol>
                        </CFormGroup>
                        {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup> */}
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="password-input">Password</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="password" id="password-input" name="password" onChange={handleUser} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="date-input">Date of birth</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="date" id="date-input" name="dob" />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">advisor
                                <CLabel htmlFor="select">Select</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="advisorId" id="select" onChange={handleChange}>
                                <option value="0">Please select</option>{advisor?.map(dep=>
                                    <option value={dep.id} >{dep.name + " " + dep.surname}</option>
                                        )}
                                </CSelect>
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
