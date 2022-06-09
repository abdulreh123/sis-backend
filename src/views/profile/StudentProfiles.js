import React, { useEffect, useState } from 'react'
import {
  CButton,
} from '@coreui/react'
import Payment from './Addpayment'
import AllPayment from './payments'
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
import styled from 'styled-components';
import CIcon from '@coreui/icons-react'
import {
   getTranscript, predictedCgpa
} from "../../actions/studentsActions";
import {
    getGroupDepartment
} from "../../actions/groupActions";
// import {
//   getGroupDepartment
// } from "../../actions/groupActions";
// const IMG = styled.img`
//   width:47%;
//   `

const Button = styled(CButton)`
margin-left: 1rem;
`;
// const AddButton = styled(CButton)`
// margin-right: 1rem;
// `;
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
const StudentProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const student = user?.Id
  const dispatch = useDispatch()
  const [paymentmodal, setPaymentModal] = useState(false)
  const prediction = useSelector((state) => state.student.prediction);
  const courses = useSelector((state) => state.student.studentCourse);
  const [modal, setModal] = useState(false)
  const [autoModal, setAutoModal] = useState(false)
  const cgpas = courses.map(course => course.cgpa)
  const newCgpa = cgpas.filter(cgpa=>cgpa!==null)
  useEffect(() => {
    //dispatch(getGroupDepartment(user?.department.id));
    dispatch(getTranscript(user?.userId));
  }, [user])
  useEffect(() => {
    if(newCgpa.length>0){
        dispatch(predictedCgpa(newCgpa));
       }
       if (user?.userId) {
        dispatch(getGroupDepartment(user?.departmentId));
    }
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
                <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{user?.department?.name}</h3>
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
                                        <th width="30%">Predicted Graduation Cgpa</th>
                                        <td width="2%">:</td>
                                        <td>{prediction?.result}</td>
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
                                    <Button color="primary" onClick={() => setAutoModal(!autoModal)}>
                                        Automate Selection
                                    </Button></div>
                            </div>

                        </CTabPane>
                        <CTabPane data-tab="profile">
                            {`null`}
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
                </CNav>
                <CTabContent>
                    <CTabPane data-tab="payments">
                        <AllPayment studentId={user?.userId} />
                    </CTabPane>
                </CTabContent>
            </CTabs>
        </div>
    </OtherInfo>
        <AddCourse modal={modal} setModal={setModal} studentId={student} />
        <AutoCourse modal={autoModal} setModal={setAutoModal} studentId={student} />

        <Payment modal={paymentmodal} setModal={setPaymentModal} studentId={user?.userId} />
</>
  )
}

export default StudentProfile
