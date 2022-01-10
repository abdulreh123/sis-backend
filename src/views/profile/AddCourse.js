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
    const [data, setData] = useState({});
    const [year, setyear] = useState('');
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.group.departmentGroups);
    const yearCourses = courses.filter(course => course.year === year)
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
                                        <option value="2019-2020 - Fall">2019-2020 - Fall</option>
                                    <option value="2019-2020 - Spring">2019-2020 - Spring</option>
                                    <option value="2019-2020 - Summer">2019-2020 - Summer</option>
                                    <option value="2020-2021 - Fall">2020-2021 - Fall</option>
                                    <option value="2020-2021 - Spring">2020-2021 - Spring</option>
                                    <option value="2020-2021 - Summer">2020-2021 - Summer</option>
                                    <option value="2021-2022 - Fall">2021-2022 - Fall</option>
                                    <option value="2021-2022 - Spring">2021-2022 - Spring</option>
                                    <option value="2022-2023 - Fall">2022-2023 - Fall</option>
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
