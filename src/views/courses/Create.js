import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch,useSelector } from "react-redux";
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
    CSelect,
} from '@coreui/react'
import {
  fetchDepartment
} from "../../actions/departmentActions";
import {
  fetchFaculty
} from "../../actions/facultyActions";
import {
    AddCourse,
    fetchCourses
} from "../../actions/coursesActions";
const Create = () => {
    const [data, setData] = useState({});
    const [department, setDepartment] = useState(0);
    const dispatch = useDispatch();
    const departments = useSelector((state) => state.department.departments);
    const faculty = useSelector((state) => state.faculty.faculties);
    const courses = useSelector((state) => state.courses.courses);
   
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name==='departmentId'){
            setDepartment(value)
        }
        setData({
            ...data,
            [name]: value
        })
    }
    const pre= courses.filter(course=> course.departmentId==department )
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddCourse({ ...data }));
        document.getElementById("resetCourse").reset()
    }
    const reset = (e) => {
        document.getElementById("resetCourse").reset()
    }    
    useEffect(() => {
        dispatch(fetchDepartment());
        dispatch(fetchCourses());
        dispatch(fetchFaculty());
    }, [dispatch]);
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Create new Course
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetCourse">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Code</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="code" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Semester</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="semester" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Faculty
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="facultyId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {faculty.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Department
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="departmentId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {departments.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Prerequisites
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="prerequisites" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {pre.map(dep=>
                                    <option value={dep.code}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Credit</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="credit" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">ECT5</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="ECT5" onChange={handleChange} />
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

