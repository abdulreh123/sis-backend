import React, { useEffect, useState } from 'react'
import {
  CImg,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from '@coreui/react'
import { useSelector, useDispatch } from "react-redux";
import CIcon from '@coreui/icons-react'
import styled from 'styled-components';
import {
  getGroupDepartment
} from "../../actions/groupActions";
import DataTable from "react-data-table-component";
import { getadvisor } from 'src/actions/advisorActions'
import { Link } from 'react-router-dom'
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
`;
const AdvisorProfile = (props) => {
  const students = useSelector((state) => state.advisor.advisor.Students);
  const Courses = useSelector((state) => state.advisor.advisor.Group);
  const general = useSelector((state) => state.advisor.advisor);
  const advisor = props?.match?.params?.id;
  const dispatch = useDispatch()
  const lorem = `null`
  useEffect(() => {
    dispatch(getadvisor(advisor));
  }, [])
  let columns = [
    {
      selector: "userId",
      name: "Student ID",
      sortable: true,
    },
    {
      selector: "name",
      name: "Name",
      sortable: true,
      cell: (row) => <LinkName to={`/student-profile/${row.id}`}>
        {row.name + " " + row.surname}
      </LinkName>

    },
    {
      selector: "createdAt",
      name: "Registered",
      cell: row => (<span>{row?.createdAt?.replace('T', ' ').replace('.000Z', '')}</span>),
      sortable: true,
    },
  ];
  let groupsCol = [
    {
      selector: "name",
      name: "Name",
      sortable: true,
      cell: (row) => <LinkName to={`/courseDashboard/${row.id}`}>
      {row.name}
    </LinkName>
    },
    {
      selector: "year",
      name: "Year",
      sortable: true,

    },
  ];
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
          <h3 style={{ color: 'black', fontSize: '1.2rem' }}>{general?.name +" "+general?.surname}</h3>
          <p style={{ color: 'black' }}>Instructor</p>
          <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
            <CIcon name="cil-envelope-open" />
            <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{general?.name?.toLowerCase() + "." + general?.surname?.toLowerCase()}@gmail.com</h3>
          </div>
          <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
            <CIcon name="cil-user" />
            <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{students?.length}</h3>
          </div>
          <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
            <CIcon name="cil-bookmark" />
            <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{Courses?.length}</h3>
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
                  {`Prof. Dr. Fadi Al-Turjman received his Ph.D. in computer science from Queen’s University, 
                  Canada, in 2011. He is a full professor and a research center director at Near East University, 
                  Nicosia, Cyprus. Prof. Al-Turjman is a leading authority in the areas of smart/intelligent IoT systems, wireless, 
                  and mobile networks’ architectures, protocols, deployments, and performance evaluation in Artificial Intelligence of 
                  Things (AIoT). His publication history spans over 350 SCI/E publications, in addition to numerous keynotes and plenary
                   talks at flagship venues. He has authored and edited more than 40 books about cognition, security, and wireless sensor networks’
                    deployments in smart IoT environments, which have been published by well-reputed publishers such as Taylor and Francis, Elsevier, IET, and Springer. He has received several recognitions and best papers’ awards at top international conferences. He also received the prestigious Best Research Paper Award from Elsevier Computer Communications Journal for the period 2015-2018, in addition to the Top Researcher Award for 2018 at Antalya Bilim University, Turkey. Prof. Al-Turjman has led a number of international symposia and workshops in flagship communication society conferences. Currently, he serves as book series editor and the lead guest/associate editor for several top tier journals, including the IEEE Communications Surveys and Tutorials (IF 23.9) and the Elsevier Sustainable Cities and Society (IF 5.7), in addition to organizing international conferences and symposiums on the most up to date research topics in AI and IoT.`}
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
          <CTabs activeTab="students">
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink data-tab="students">
                  Students
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="courses">
                  Courses
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane data-tab="students">
                <DataTable
                  columns={columns}
                  data={students ? students : []}
                  striped={true}
                  responsive={true}
                  pagination={true}
                  highlightOnHover={true}
                  subHeaderAlign="center"
                  noHeader={true}
                />            </CTabPane>
              <CTabPane data-tab="courses">
                <DataTable
                  columns={groupsCol}
                  data={Courses ? Courses : []}
                  striped={true}
                  responsive={true}
                  pagination={true}
                  highlightOnHover={true}
                  subHeaderAlign="center"
                  noHeader={true}
                /> 
              </CTabPane>
            </CTabContent>
          </CTabs>
        </div>
      </OtherInfo>
    </>
  )
}

export default AdvisorProfile
