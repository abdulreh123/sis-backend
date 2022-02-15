import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from "react-redux";
import {
    OfferCourses, getYear, setYear
} from "../../actions/groupActions";
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
const Settings = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const year = useSelector((state) => state.group.year);

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
        dispatch(setYear({ ...data }));
        document.getElementById("resetStudent").reset()
    }
    useEffect(() => {
        dispatch(getYear())
    }, [dispatch]);
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Settings
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetStudent">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Academic Year</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="year" onChange={handleChange} defaultValue={year} />
                            </CCol>
                        </CFormGroup>

                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={handleSubmit} /> Submit</CButton>
                    <CButton type="reset" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={()=>{dispatch(OfferCourses())}}/>Offer Courses</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    )
}

export default Settings

