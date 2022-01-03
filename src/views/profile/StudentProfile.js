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
    height: 2rem;
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
    }, [dispatch, user, aprooved]);
    useEffect(() => {
        // dispatch(predictedCgpa(cgpas));
    }, [dispatch, courses]);
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
                        <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>Computer Engineering</h3>
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
                                            <tr>
                                                <th width="30%">Predicted Cgpa</th>
                                                <td width="2%">:</td>
                                                <td>{/*{prediction?.result}*/}</td>
                                            </tr>
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
                                                <Cell>{log.Course.name}</Cell>
                                                <Cell>{log.Course.credit}</Cell>
                                                <Cell>{log.studentscourses?.grade}</Cell>
                                                <Cell>{log.studentscourses?.CrPts}</Cell> </> : null}

                                    </React.Fragment>

                                )}
                            </DataTable>
                            <Gpa>AVERAGE: {Number.parseFloat(course.gpa).toPrecision(3)} / OVERALL AVERAGE: {Number.parseFloat(course.cgpa).toPrecision(3)}/ STATUS : {course.status} / TOTAL : {course.totalcredit}</Gpa>

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
