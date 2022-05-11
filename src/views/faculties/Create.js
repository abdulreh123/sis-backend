import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch } from "react-redux";
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
} from '@coreui/react'
import {
    AddFaculty,
} from "../../actions/facultyActions";
const Create = () => {
    
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
        dispatch(AddFaculty({ ...data }));
        document.getElementById("resetDepartment").reset()
    }
    const reset = (e) => {
        document.getElementById("resetDepartment").reset()
    }
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Create Faculty
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetDepartment">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={handleSubmit} /> Submit</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" onClick={reset} /> Reset</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    )
}

export default Create

