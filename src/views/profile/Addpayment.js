import React, { useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
    CButton,
    CCardBody,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CFormGroup,
    CRow,
    CSelect,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CInput,
    CLabel,
} from '@coreui/react'
import styled from 'styled-components'
import {
    Addpayment
} from "../../actions/paymentActions";
const Modals = (props) => {
    const studentId = props.studentId
    const [data, setData] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch= useDispatch()
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value,
            studentId:studentId
        });
    };
    const handleFile = (e) => {
        setData({
            ...data,
            image:e.target.files[0].name
        });
        setSelectedFile(e.target.files)
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Addpayment(data,selectedFile));
        props.setModal(!props.modal)
       // document.getElementById("resetAdd").reset()
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
                        <CModalTitle>Add Payment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardBody>       
                        <CFormGroup row>
                            <CCol md="3">Type
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="type" id="select" name='type' onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    <option value="course">Per Course</option>
                                    <option value="Semester">Per Semester</option>
                                </CSelect>
                            </CCol>
                        </CFormGroup>   
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Amount</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="amount" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>  
                        <CFormGroup row>
                            <CCol md="3">year
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="year" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    <option value="2020-2021 - Fall">2020-2021 - Fall</option>
                                    <option value="2020-2021 - Spring">2020-2021 - Spring</option>
                                </CSelect>
                            </CCol>
                        </CFormGroup>            
                        <CFormGroup row>
                            <CCol md="3">reciept
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="file" name="image" onChange={handleFile} />
                            </CCol>
                        </CFormGroup>            
                        </CCardBody>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={handleSubmit}>
                            Add
                        </CButton>{' '}
                        <CButton color="secondary" onClick={() => props.setModal(!props.modal)}>
                            Cancel
                        </CButton>
                    </CModalFooter>
                </CModal>
            </CCardBody>
        </CRow>
    )
}

export default Modals
