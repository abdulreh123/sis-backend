import React, { lazy, useEffect, useState, useRef } from 'react'
import DataTable from "react-data-table-component";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormGroup,
  CSelect,
  CImg,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CCardHeader
} from '@coreui/react'
import CSVReader from "react-csv-reader";
import {
  updateGrade
} from "../../actions/studentsActions";
import { useSelector, useDispatch } from "react-redux";
import Edit from './UpdateGrade'
import {
  getGroup
} from "../../actions/groupActions";
import styled from 'styled-components'
import CIcon from '@coreui/icons-react'

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

const grades = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF"]
const CourseDashboard = (props) => {
  const id = props?.match?.params?.id;
  const group = useSelector((state) => state.group.group);
  const lorem = `A. Students demonstrate that they are able to communicate in culturally appropriate ways using
  more complex structures while relying heavily on acquired formulaic language.
  B. Students demonstrate that they are able to understand and respond to simple statements and
  questions and participate in informal conversation within the cultural context.
  C. Students demonstrate that they are able to exchange personal information, fulfill routines
  needs in the four language skills within the cultural context.
  D. Students demonstrate reading and writing skills that reflect their emerging oral language
  within the cultural context`
  const user = useSelector((state) => state.auth.user);
  const profileImage = useRef(null)
  const student = useSelector((state) => state.student.student);
  const [modal, setModal] = useState(false)
  const [selected, setSelected] = useState([])
  const [button, showButton] = useState(false)
  const [previous, setPrevious] = useState({})
  const dispatch = useDispatch()
  const handleForce = (filedata) => {
    filedata.map(file => {
      const studentId = group?.Students?.filter(stu => stu.userId === file.studentId)
      dispatch(updateGrade({
        grade: file.grade,
        midtermOne: file.midtermOne,
        midtermTwo: file.midtermTwo,
        final: file.final
      }, studentId[0].id, id));
    })
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.replace(/\W/g, "_")
  };
  const handleChange = async (e) => {
    const target = e.target;
    const value = target.value;
    const grade = { grade: value }
    if (value !== 0) {
      await selected.map(data => {
        dispatch(updateGrade({ ...grade }, data.studentscourses.studentId, data.studentscourses.courseGroupId));
      })
    }

  }


  const rowSelectChange = (row) => {
    if (row.selectedRows.length !== 0) {
      showButton(true)
    }
    if (row.selectedRows.length === 0) {
      showButton(false)
    }
    setSelected(row.selectedRows)
  }

  useEffect(() => {
    dispatch(getGroup(id));
  }, [dispatch, id, student]);
  let columns = [
    {
      selector: "userId",
      name: "studentID",
      sortable: true
    },
    {
      selector: "name",
      name: "full name",
      sortable: true,
      cell: (row) => (<p>{row.name + " " + row.surname}</p>)
    },
    {
      selector: "midtermOne",
      name: "Midterm one",
      sortable: true,
      cell: (row) => (<p>{row.studentscourses?.midtermOne}</p>)
    },
    {
      selector: "midtermTwo",
      name: "Midterm two",
      sortable: true,
      cell: (row) => (<p>{row.studentscourses?.midtermTwo}</p>)
    },
    {
      selector: "final",
      name: "Final",
      sortable: true,
      cell: (row) => (<p>{row.studentscourses?.final}</p>)
    },
    {
      selector: "grade",
      name: "Grade",
      sortable: true,
      cell: (row) => (<p>{row.studentscourses?.grade}</p>)
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="table-icon">
          <span
            style={{ margin: '1rem' }}
            onClick={() => {
              setModal(!modal);
              setPrevious(row.studentscourses)
            }}
          >
            Edit
          </span>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
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
          <h3 style={{ color: 'black', fontSize: '1.2rem' }}>{group?.Advisor?.name + " " + group?.Advisor?.surname}</h3>
          <p style={{ color: 'black' }}>Instructor</p>
          <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
            <CIcon name="cil-envelope-open" />
            <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{group?.Advisor?.name.toLowerCase() + "." + group?.Advisor?.surname.toLowerCase()}@gmail.com</h3>
          </div>
          <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
            <CIcon name="cil-user" />
            <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{group?.Students?.length}</h3>
          </div>
          <div style={{ display: 'flex', padding: '0rem 0rem 0.5rem 1rem' }}>
            <CIcon name="cil-speedometer" />
            {group?.CourseRoom?.map(room => (

              <h3 style={{ color: 'black', padding: '0rem 0rem 0rem 1rem', fontSize: '0.8rem' }}>{room?.day + " " + room?.timeStart + "-" + room?.timeEnd}</h3>
            ))}
          </div>
        </Profile>
        <Info >
          <div style={{ padding: '1rem' }}>
            <CTabs activeTab="home">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="home">
                    Overview
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="profile">
                    Course Description
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="home">
                  {`Welcome to the ${group?.Course?.name} course. This course is intended to give you an opportunity to explore the content, design, and interface of our self-paced online courses. Each module contains one sample lesson drawn from our inventory of self-paced courses. Browse the lessons to see examples of instructor- and computer-graded assignments, instructor commentaries, practice exercises, and audio and video content.
                   Use the Next or Previous buttons at the bottom of each page to move sequentially through the course. You may also click the Home button on the left-hand menu at anytime to skip around in the course.`}
                </CTabPane>
                <CTabPane data-tab="profile">
                  {`${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </div>
        </Info>
      </Container>
      {user?.status === 'Student' ? null :
        <>
          <Edit modal={modal} setModal={setModal} previous={previous} />
          <CCard>
            <CCardBody>
              <CRow>
                <CCol sm="5">
                  <div style={{ display: "flex" }}>
                    <h4 style={{ marginRight: "2rem" }} id="traffic" className="card-title mb-0">Students</h4>
                    {button ?
                      <CFormGroup row>
                        <CCol xs="12" md="20">
                          <CSelect custom name="grade" id="select" onChange={handleChange} >
                            <option value="0">Select Grade</option>
                            {grades.map(dep =>
                              <option value={dep}>{dep}</option>
                            )}
                          </CSelect>
                        </CCol>
                      </CFormGroup> :
                      <>
                        <div ref={profileImage} style={{ display: 'hidden' }}>
                          <CSVReader
                            cssClass="react-csv-input"
                            onFileLoaded={handleForce}
                            parserOptions={papaparseOptions}
                          />
                        </div>
                      </>
                    }
                  </div>
                </CCol>
                <CCol sm="7" className="d-none d-md-block">
                </CCol>
              </CRow>
              <DataTable
                columns={columns}
                data={group?.Students ? group?.Students : []}
                striped={true}
                responsive={true}
                pagination={true}
                highlightOnHover={true}
                subHeaderAlign="center"
                selectableRows
                onSelectedRowsChange={rowSelectChange}
                noHeader={true}
              />
            </CCardBody>
          </CCard></>}
          

    </>
  )
}

export default CourseDashboard
