import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import AddCourse from './AddCourse'
import AutoCourse from './AutoCourse'
import CourseApproval from './CourseApproval'
import styled from 'styled-components';
import AllPayment from './payments'
import { Link } from 'react-router-dom'
import {
    getStudent, getTranscript
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
const StudentProfile = (props) => {
    const student = props.match.params.id
    const user = useSelector((state) => state.student.student);
    const courses = useSelector((state) => state.student.studentCourse);
    const aprooved = useSelector((state) => state.student.approveMessage);
    const [modal, setModal] = useState(false)
    const [autoModal, setAutoModal] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if(student){
            dispatch(getStudent(student));
            dispatch(getTranscript(user?.userId));
        }
    }, [dispatch, student]);
    useEffect(() => {
        dispatch(getGroupDepartment(user?.advisor?.departmentId));
    }, [dispatch, user,aprooved]);
    return (
        <div class="student-profile py-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                            <div class="card-header bg-transparent text-center">
                                <IMG
                                    src={'avatars/6.jpg'}
                                    className="c-avatar-img"
                                    alt="admin@bootstrapmaster.com"
                                />
                                <h3>
                                    {user?.name + " " + user?.surname}</h3>
                            </div>
                            <div class="card-body">
                                <p class="mb-0"><strong class="pr-1">Student ID:</strong>{user?.userId}</p>
                                <p class="mb-0"><strong class="pr-1">Department:</strong>4</p>
                                <p class="mb-0"><strong class="pr-1">Advisor:</strong>{user?.advisor?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card shadow-sm">
                            <div class="card-header bg-transparent border-0">
                                <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
                            </div>
                            <div class="card-body pt-0">
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
                                        <th width="30%">Religion</th>
                                        <td width="2%">:</td>
                                        <td>Group</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">blood</th>
                                        <td width="2%">:</td>
                                        <td>B+</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div>
                            <Button color="primary" onClick={() => setModal(!modal)}>
                                Add courses
                            </Button>
                            <CButton color="primary" onClick={() => setAutoModal(!autoModal)}>
                                Automate Selection
                            </CButton></div>
                    </div>
                </div>
            </div>
            <h4 style={{padding:"1rem"}}> Payments</h4>
            <div style={{padding:"1rem"}}>
            <AllPayment studentId={user?.userId} /></div>
            <h4 style={{padding:"1rem"}}> Awaiting Approval</h4>
            <div style={{padding:"1rem"}}>
            <CourseApproval studentId={user?.userId} /></div>
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
    )
}

export default StudentProfile
