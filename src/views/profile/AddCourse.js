import React, { useState, useEffect } from 'react'
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
    CCol,
    CSelect,
    CForm,
} from '@coreui/react'
import styled from 'styled-components'
import {
    AddRemoveCourses
} from "../../actions/studentsActions";
import {
    checkClash
} from "../../actions/groupActions";
const MultiselectCosutm = styled(Multiselect)`
  margin-bottom: 4px;
`;
const MultiSelectLabel = styled.span`
  font-size: 0.8rem;
  color: var(--secondary-text-color);
`;
const Modals = (props) => {
    const studentId = props.studentId
    let arrayYears =[]
    const [data, setData] = useState({});
    const [year, setyear] = useState('');
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.group.departmentGroups);
    const yearCourses = courses.filter(course => course.year === year)
    const user = useSelector((state) => state.auth.user);
    let courseOptions = yearCourses?.map((course) => ({
        id: course.id,
        name: course.name,
    }));
    const handleCourses = (e) => {
        setData({
            ...data,
            courses: e,
        });
    };
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        setyear(value)
    }
    const handleSubmit = (e) => {
        const courses = data?.courses.map(course => course.id)
        const create = {
            type: 'add',
            year: year,
            courses: courses

        }
        e.preventDefault();
        dispatch(AddRemoveCourses(studentId, { ...create }));
        props.setModal(!props.modal)
        document.getElementById("resetAdd").reset()
    }
    const acayear1 = user?JSON.parse(user?.year.slice(0,4)):2021
    const years=()=>{
        console.log(acayear1)
        for (let i = acayear1; i < acayear1+4; i++) {
            arrayYears.push(`${i}-${i+1} - Fall`)
            arrayYears.push(`${i}-${i+1} - Spring`)
            arrayYears.push(`${i}-${i+1} - Summer`)
          }
    }
    
    years()
    useEffect(() => {
        const courses = data?.courses?.map(course => course.id)
        if (courses !== undefined) {
            dispatch(checkClash(courses));
        }
    }, [dispatch, data]);
    return (
        <CRow>
            <CCardBody>
                <CModal
                    show={props.modal}
                    onClose={() => props.setModal(!props.modal)}
                    color="primary"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Add courses</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetAdd">
                                <CFormGroup row>
                                    <MultiSelectLabel>Acadamic Year :</MultiSelectLabel>
                                    <CSelect custom name="select" id="select" onChange={handleChange}>
                                        <option value="0">Please select</option>
                                        {arrayYears.map(yea=>
                                        <option value={yea}>{yea}</option>
                                            )}
                                    </CSelect>
                                    <MultiSelectLabel>Courses :</MultiSelectLabel>
                                    <MultiselectCosutm
                                        id="watchers"
                                        options={courseOptions}
                                        displayValue="name"
                                        onSelect={handleCourses}
                                        onRemove={handleCourses}
                                    />
                                </CFormGroup>
                            </CForm>
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
