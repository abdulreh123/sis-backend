import React, {useState,useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch,useSelector } from "react-redux";
import {
    fetchAdvisor,
} from "../../actions/advisorActions";
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
    AddStudents,
} from "../../actions/studentsActions";
const Register = () => {
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const advisor = useSelector((state) => state.advisor.advisors);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name==='userId'||"advisorId"){
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
    console.log(data)
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
            userId: data.userId,
            name: data.name,
            surname: data.surname,
            passportNumber: data.passportNumber,
            nationality: data.nationality,
            advisorId: data.advisorId,
            user: user
        }
        e.preventDefault();
        dispatch(AddStudents({ ...create }));
        document.getElementById("resetStudent").reset()
    }
    useEffect(() => {
        dispatch(fetchAdvisor());
    }, [dispatch]);
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Register new student
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetStudent">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Student ID</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="number" name="userId" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
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
                                <CLabel htmlFor="number-input">Surname</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="surname" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Passport Number</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="passportNumber" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Nationality</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="nationality" onChange={handleChange} />
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
                            <CCol md="3">
                                <CLabel htmlFor="date-input">Date of birth</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="date" id="date-input" name="dob" />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">advisor
                                <CLabel htmlFor="select">Select</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="advisorId" id="select">
                                    <option value="0">Please select</option>{advisor?.map(dep=>
                                    <option value={dep.id}>{dep.name + " " + dep.surname}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={handleSubmit} /> Submit</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    )
}

export default Register

