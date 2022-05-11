import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from "react-redux";
import {
    OfferCourses, getYear, setYear
} from "../../actions/groupActions";
import styled from 'styled-components'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CSelect
} from '@coreui/react'
const MultiSelectLabel = styled.span`
  font-size: 0.8rem;
  color: var(--secondary-text-color);
`;
const Settings = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const year = useSelector((state) => state.group.year);
    let arrayYears = []

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
    const acayear1 = year? JSON.parse(year?.slice(0, 4)):2021
    const years = () => {
        for (let i = acayear1; i < acayear1 + 4; i++) {
            arrayYears.push(`${i}-${i + 1} - Fall`)
            arrayYears.push(`${i}-${i + 1} - Spring`)
        }
    }

    years()
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Settings
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetStudent">
                        <CFormGroup row>
                            <MultiSelectLabel>Acadamic Year :</MultiSelectLabel>
                            <CSelect custom name="year" id="select" onChange={handleChange}>
                                <option value="0">Please select</option>
                                {arrayYears.map(yea =>
                                    <option value={yea}
                                    selected={yea === year ? "'selected'" : null}
                                    >{yea}</option>
                                )}
                            </CSelect>
                        </CFormGroup>

                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={handleSubmit} /> Submit</CButton>
                    <CButton type="reset" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={() => { dispatch(OfferCourses()) }} />Offer Courses</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    )
}

export default Settings

