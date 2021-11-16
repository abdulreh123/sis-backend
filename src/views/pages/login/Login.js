import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  userLogin,
} from "../../../actions/authActions";
import Cookies from 'js-cookie';
const checkLogin = () => {
  return Cookies.get('__SOSAR_AUTH') ? true : false;
}

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value
    })
  }
  const redirect = () => {
    history.push(`/dashboard`)
  }
  const loadUser = async () => {
    dispatch(userLogin({ ...data }));
  }
  const handleSubmit = async (e) => {
    await loadUser()
    e.preventDefault();
    document.getElementById("resetLogin").reset()
  }
  if (checkLogin() === true && user) {
    history.push(`/dashboard`)
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <div style={{textAlign: "center",marginBottom:"1rem"}}>
          <CIcon
            className="c-sidebar-brand-minimized"
            name="sygnet"
            src="https://neu.edu.tr/wp-content/uploads/2018/11/01/neu-42-years-in-education.png"
            height={100}
          /></div>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm id="resetLogin">
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" name="username" onChange={handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={handleChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleSubmit}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
