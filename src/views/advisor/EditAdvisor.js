import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
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
    updateAdvisor
  } from "../../actions/advisorActions";

const Modals = (props) => {
    const advisor = useSelector((state) => state.advisor.advisor);
    const department = useSelector((state) => state.department.departments);
    const dispatch = useDispatch()
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
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
            name: data.name,
            surname: data.surname,
            departmentId: data.departmentId,
            user: user
        }
        e.preventDefault();
        dispatch(updateAdvisor({ ...create },advisor.id));
        document.getElementById("resetAdvisor").reset()
        props.setModal(!props.modal)
    }
    useEffect(() => {
        dispatch(fetchDepartment());
    }, [dispatch]);
  return (
    <CRow>
          <CCardBody>
              <CModal 
              show={props.modal} 
              onClose={() => {props.setModal(!props.modal); document.getElementById("resetAdvisor").reset()}}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>Edit Student</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetAdvisor">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} defaultValue={advisor?.name} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Surname</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="surname" onChange={handleChange} defaultValue={advisor?.surname}/>
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
                            <CCol md="3">Department
                                <CLabel htmlFor="select">Select</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="departmentId" id="select" onChange={handleChange} >
                                    <option value="0">Please select</option>{department?.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={handleSubmit}>
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
