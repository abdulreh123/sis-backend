import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    CImg,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CTabs,
    CFormGroup,
    CCol,
    CSelect,
} from '@coreui/react'
import AddCourse from './AddCourse'
import AutoCourse from './AutoCourse'
import CourseApproval from './CourseApproval'
import styled from 'styled-components';
import AllPayment from './payments'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import {
    getStudent, getTranscript, predictedCgpa
} from "../../actions/studentsActions";
import {
    getGroupDepartment
} from "../../actions/groupActions";
import {
    CButton,
} from '@coreui/react'
const IMG = styled.img`
  width:47%;
  `
const BranchWrapper = styled.div`
`;
const Card = styled.div`
  display: flex;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  flex-direction: column;
  color: ${(props) => props.color || "#4e4e51"};
  background: ${(props) => props.background || "#fff"};
  padding: ${(props) => props.padding || "10px 17px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: ${(props) => props.border || "1px solid #E6E9ED"};
  border-top: ${(props) => props.borderTop};
  opacity: 1;
  transition: all 0.2s ease;
  text-align: ${(props) => props.textAlign};
`;
const DataTable = styled(Card)`
    display: grid;
    grid-template-columns: 24% 40% 11% 10% 15%;
    border: 0.5px solid #e3e4e8 !important;
    margin: 1.5rem 1rem 2rem 1rem;
    padding: 0 !important;
`;
const Button = styled(CButton)`
margin-right: 1rem;
`;
const Payment = styled(CButton)`
margin-left: 1rem;
`;
const Cell = styled.div`
    border: 0.5px solid #E6E9ED;
    height: 2.6rem;
    text-align: center;
    padding: 3px;
`;
const CellHead = styled.div`
    padding: 12px;
    border: 0.5px solid #E6E9ED;
    height: 3rem;
    text-align: center;
    font-weight: 550;
`;
const Category = styled.div`
    margin: 2rem 2rem 0 2rem;
    border-bottom: 1px solid #e3e4e8;
    font-size: 1.2rem;    
    text-align: center;
`;
const Gpa = styled.p`
text-align: center;
`;
const LinkName = styled(Link)`
  color: #8d0000 !important;
`;

const Container = styled.div`
display: grid;
grid-template-columns:  25% 75%;
grid-gap: 5rem;
padding: 10px;
border-radius: 9px;
@media (max-width:1200px)
{
  display:block;
}
`;
const Profile = styled.div`
  border-radius: 0.5rem;
  background: white;
  height: 23rem;
  text-align: -webkit-center;
`;
const Info = styled.div`
  border-radius: 0.5rem;
  background: white;
  height: 23rem;
  margin-right: 5rem; 
  @media (max-width:1200px)
{ 
  width: 100%;
  margin-top:2rem;
}
`;
const OtherInfo = styled.div`
  border-radius: 0.5rem;
  background: white;
  margin-top: 3rem; 
  width: 99%;
    margin-left: 0.5rem;
`;

const grades = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF"]
const StudentProfile = (props) => {
    const student = props.match.params.id
    const user = useSelector((state) => state.student.student);
    const courses = useSelector((state) => state.student.studentCourse);
    const prediction = useSelector((state) => state.student.prediction);
    const aprooved = useSelector((state) => state.student.approveMessage);
    const lorem = `null`
    const [modal, setModal] = useState(false)
    const [autoModal, setAutoModal] = useState(false)
    const dispatch = useDispatch()
    const cgpas = courses.map(course => course.cgpa)
    const newCgpa = cgpas.filter(cgpa=>cgpa!==null)
    const [data, setData] = useState([]);
    const [count, setCount] = useState(true);
    const filter = courses.filter(course => course.gpa === null)
    useEffect(() => {
        if (student) {
            dispatch(getStudent(student));
        }
    }, [dispatch, student]);
    useEffect(() => {
        if (user?.userId) {
            dispatch(getGroupDepartment(user?.advisor?.departmentId));
            dispatch(getTranscript(user?.userId));
        }
    }, [dispatch, user?.userId, aprooved]);
    useEffect(() => {
        if(newCgpa.length>0){
         dispatch(predictedCgpa(newCgpa));
        }
    }, [dispatch, courses]);
    if (count && courses.length>0) {
        console.log(count)
        const preCrp = filter[0]?.courses?.filter(course => course.studentscourses.grade !== null)
        console.log(preCrp)
        preCrp?.map(pre => {
            const store = {
                id: pre.id,
                grade: pre.studentscourses.grade,
                CrPts: JSON.parse(pre.studentscourses.CrPts),
                credit: 3
            }
            setData(arr => [...arr, store])
        })
        setCount(false)
    }
    const CalculateCrPoints = (grade, credit) => {
        let points: number | undefined;
        switch (grade) {
            case "AA":
                points = 4 * credit
                break;
            case "BA":
                points = 3.5 * credit
                break;
            case "BB":
                points = 3 * credit
                break;
            case "CB":
                points = 2.5 * credit
                break;
            case "CC":
                points = 2 * credit
                break;
            case "DC":
                points = 1.5 * credit
                break;
            case "DD":
                points = 1 * credit
                break;
            case "FD":
                points = 0.5 * credit
                break;
            case "FF":
                points = 0 * credit
                break;
        }
        return points
    }
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const newValue = JSON.parse(value);
        const calcultae = CalculateCrPoints(newValue.grade, newValue.credit)
        const store = {
            id: newValue.id,
            grade: newValue.grade,
            CrPts: calcultae,
            credit: newValue.credit
        }
        const final = data.filter(dat => dat.id !== newValue.id)
        setData(final)
        setData(arr => [...arr, store])
    }
    const displayPoints = (id) => {
        const crd = data.filter(course => course.id === id)
        return crd[0]?.CrPts
    }
    const displayGpa = () => {
        const sum = data.reduce((accumulator, object) => {
            return accumulator + object.CrPts;
        }, 0);
        const credit = data.reduce((accumulator, object) => {
            return accumulator + object.credit;
        }, 0);
        return (sum / credit).toPrecision(3)
    }
    const displayCGpa = () => {
        const sum1 = data.reduce((accumulator, object) => {
            return accumulator + object.CrPts;
        }, 0);
        const filter = courses.filter(course => course.gpa !== null)
        const credit1 = data.reduce((accumulator, object) => {
            return accumulator + object.credit;
        }, 0);
        if (filter.length > 0) {
            const sum = filter.reduce((accumulator, object) => {
                return accumulator + object.totalcrPts;
            }, 0);
            const credit = filter.reduce((accumulator, object) => {
                return accumulator + object.totalcredit;
            }, 0);
                const data =[...newCgpa,(sum + sum1)/(credit1 + credit)]
                dispatch(predictedCgpa(data));
            return ((sum + sum1)/(credit1 + credit)).toPrecision(3)
        }else{
                const data =[(sum1 / credit1)]
                dispatch(predictedCgpa(data)); 
            return (sum1 / credit1).toPrecision(3)
        }
    }
    return (
        <>
            <Container class="content">
                <Profile >
                    <div style={{ width: '9rem' }}>
                        <CImg
                            src={'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'}
                            className="c-avatar-img"
                            alt="admin@bootstrapmaster.com"
                        /></div>
                    <h3 style={{ color: 'black', fontSize: '1.2rem' }}>{user?.name}</h3>
                    <p style={{ color: 'black' }}>Student</p>
                    <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
                        <CIcon name="cil-envelope-open" />
                        <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{user?.name?.toLowerCase() + "." + user?.name?.toLowerCase()}@gmail.com</h3>
                    </div>
                    <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
                        <CIcon name="cil-user" />
                        <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{user?.Department?.name}</h3>
                    </div>
                    <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
                        <CIcon name="cil-bookmark" />
                        <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{user?.advisor?.name}</h3>
                    </div>
                </Profile>
                <Info >
                    <div style={{ padding: '1rem' }}>
                        <CTabs activeTab="home">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink data-tab="home">
                                        General
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="profile">
                                        Contact
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane data-tab="home">
                                    <div class="card-body pt-0" style={{ marginTop: '1rem' }}>
                                        <table class="table table-bordered">
                                            <tr>
                                                <th width="30%">Roll</th>
                                                <td width="2%">:</td>
                                                <td>125</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Academic Year	</th>
                                                <td width="2%">:</td>
                                                <td>2020</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Gender</th>
                                                <td width="2%">:</td>
                                                <td>Male</td>
                                            </tr>
                                            {user?.Department?.id!==5?
                                            <tr>
                                                <th width="30%">Graduation Cgpa</th>
                                                <td width="2%">:</td>
                                                <td>{prediction?.result}</td>
                                            </tr>:null}
                                            <tr>
                                                <th width="30%">blood</th>
                                                <td width="2%">:</td>
                                                <td>B+</td>
                                            </tr>
                                        </table>

                                        <div>
                                            <Button color="primary" onClick={() => setModal(!modal)}>
                                                Add courses
                                            </Button>
                                            <CButton color="primary" onClick={() => setAutoModal(!autoModal)}>
                                                Automate Selection
                                            </CButton></div>
                                    </div>

                                </CTabPane>
                                <CTabPane data-tab="profile">
                                    {`${lorem}`}
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </div>
                </Info>
            </Container>
            <OtherInfo >
                <div style={{ padding: '1rem' }}>
                    <CTabs activeTab="payments">
                        <CNav variant="tabs">
                            <CNavItem>
                                <CNavLink data-tab="payments">
                                    Payments
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink data-tab="approval">
                                    Approval
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                        <CTabContent>
                            <CTabPane data-tab="payments">
                                <AllPayment studentId={user?.userId} />
                            </CTabPane>
                            <CTabPane data-tab="approval">
                                <CourseApproval studentId={user?.userId} />
                            </CTabPane>
                        </CTabContent>
                    </CTabs>
                </div>
            </OtherInfo>
            <div class="student-profile py-4">
                <BranchWrapper>
                    {courses?.map((course, index) =>
                        <div margin="2rem" key={index} >

                            <Category>
                                Academic year {course.year}
                            </Category>
                            <DataTable>
                                <CellHead>Code</CellHead>
                                <CellHead>Name</CellHead>
                                <CellHead>Credit</CellHead>
                                <CellHead>grade</CellHead>
                                <CellHead>CrPts</CellHead>
                                {course?.courses?.map((log, index) =>
                            <React.Fragment key={index} >
                                {log.studentscourses.academicYear === course.year ?
                                    <>
                                        <Cell>{log.Course.code}</Cell>
                                        <Cell><Link to={`/courseDashboard/${log?.id}`}>{log.Course.name}</Link></Cell>
                                        <Cell>{log.Course.credit}</Cell>
                                        <Cell>{log.studentscourses?.grade ? log.studentscourses?.grade :

                                            <CFormGroup row>
                                                <CCol xs="12" md="20">
                                                    <CSelect custom name="grade" id="select" onChange={handleChange} >
                                                        <option value="0">Predict Grade</option>
                                                        {grades.map(dep =>
                                                            <option value={`{"grade":"${dep}","id":${log?.id},"credit":${log.Course.credit}}`}>{dep}</option>
                                                        )}
                                                    </CSelect>
                                                </CCol>
                                            </CFormGroup>
                                        }</Cell>
                                        <Cell>{log.studentscourses?.CrPts ? log.studentscourses?.CrPts : displayPoints(log?.id)}</Cell> </> : null}

                            </React.Fragment>

                        )}
                    </DataTable>
                    <Gpa>GPA: {course.gpa ? Number.parseFloat(course.gpa).toPrecision(3) : displayGpa()} / CGPA: {course.cgpa?Number.parseFloat(course.cgpa).toPrecision(3):displayCGpa()}/ STATUS : {course.status} / TOTAL CREDIT: {course.totalcredit}</Gpa>
                        </div>
                    )}
                </BranchWrapper>

                <AddCourse modal={modal} setModal={setModal} studentId={student} />
                <AutoCourse modal={autoModal} setModal={setAutoModal} studentId={student} />
                
            </div>
        </>
    )
}

export default StudentProfile
