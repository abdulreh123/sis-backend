import React, { lazy,useEffect,useState } from 'react'
import DataTable from "react-data-table-component";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormGroup,
  CSelect,
  CButton
} from '@coreui/react'
import {
    updateGrade
} from "../../actions/studentsActions";
import { useSelector, useDispatch } from "react-redux";
import Edit from './UpdateGrade'
import {
    getGroup
} from "../../actions/groupActions";

const WidgetsDropdown = lazy(() => import('../widgets/CoursesWidgets'))
const grades =["AA","BA","BB","CB","CC","DC","DD","FD","FF"]
const CourseDashboard = (props) => {
    const  id  = props?.match?.params?.id;
  const group = useSelector((state) => state.group.group);
  const student = useSelector((state) => state.student.student);
  const [modal, setModal] = useState(false)
  const [selected, setSelected] = useState([])
  const [button, showButton] = useState(false)
  const [previous, setPrevious] = useState({})
  const dispatch = useDispatch()
  
  const handleChange = async(e) => {
    const target = e.target;
    const value = target.value;
    const grade={grade:value}
    if(value!=0){
      await selected.map(data=>{
        dispatch(updateGrade({ ...grade },data.studentscourses.studentId,data.studentscourses.courseGroupId));
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
}, [dispatch,id,student]);
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
    cell: (row) => (<p>{row.name+" "+ row.surname}</p>)
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
        style={{margin: '1rem'}}
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
      <WidgetsDropdown students={group?.Students?.length}/>
      <Edit modal={modal} setModal={setModal} previous={previous}/>
      <CCard> 
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <div style={{display:"flex"}}> 
              <h4 style={{ marginRight: "2rem"}} id="traffic" className="card-title mb-0">All Students</h4>
            {button?
            <CFormGroup row>
            <CCol xs="12" md="20">
                <CSelect custom name="grade" id="select" onChange={handleChange} >
                    <option value="0">Select Grade</option>
                    {grades.map(dep=>
                    <option value={dep}>{dep}</option>
                        )}
                </CSelect>
            </CCol>
        </CFormGroup>:
         <div style={{cursor:"pointer"}}>
                    Import CSV
                  </div>  
            }
              </div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
            </CCol>
          </CRow> 
           <DataTable
            columns={columns}
            data={group?.Students? group?.Students : []}
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
      </CCard>
    </>
  )
}

export default CourseDashboard
