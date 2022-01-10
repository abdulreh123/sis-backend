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
} from '@coreui/react'
import {
    updateChairman
  } from "../../actions/chairmanActions";

const Modals = (props) => {
    const chairman = useSelector((state) => state.chairmans.chairman);
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
            userId:data.userId,
            name: data.name,
            surname: data.surname,
        }
        e.preventDefault();
        dispatch(updateChairman({ ...create },chairman.id));
        document.getElementById("resetUpdateChairman").reset()
        props.setModal(!props.modal)
    }
  return (
    <CRow>
          <CCardBody>
              <CModal 
              show={props.modal} 
              onClose={() => {props.setModal(!props.modal); document.getElementById("resetUpdateChairman").reset()}}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>Edit Student</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetUpdateChairman">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">user Id</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="userId" onChange={handleChange} defaultValue={chairman?.userId} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} defaultValue={chairman?.name} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Surname</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="surname" onChange={handleChange} defaultValue={chairman?.surname}/>
                            </CCol>
                        </CFormGroup>
                        {/* <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Username</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="userName" onChange={handleUser} />
                            </CCol>
                        </CFormGroup> */}
                        {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup> */}
                        {/* <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="password-input">Password</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="password" id="password-input" name="password" onChange={handleUser} />
                            </CCol>
                        </CFormGroup> */}
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
