import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import Edit from './EditStudent'
import {
  fetchStudents,getStudent,deleteStudent
} from "../../actions/studentsActions";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const LinkName = styled(Link)`
  color: #8d0000 !important;
`;
const AllStudent = () => {
    const students = useSelector((state) => state.student.students);
    const user = useSelector((state) => state.auth.user);
    const student = useSelector((state) => state.student.student);
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch,student]);

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
          sortable: true,},
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem',cursor:"pointer"}}
                onClick={() => {
                  setModal(!modal);
                  dispatch(getStudent(row.id))
                  // getDepartmentData(row.id);
                }}
              >
                  Edit
              </span>
              <span style={{cursor:"pointer"}} onClick={() => {
                  dispatch(deleteStudent(row.id))
                  // getDepartmentData(row.id);
                }} >
                  Delete
              </span>
            </div>
          ),
          ignoreRowClick: true,
          allowOverflow: true,
        },
      ];
      
      const studentCol = columns.filter(col=>col.name!=="Actions");
  return (
      <>
    <Edit modal={modal} setModal={setModal}/>
    <DataTable
            columns={user?.status==='Chairman'|| user?.status==='SuperAdmin'	?columns :studentCol}
            data={students ? students : []}
            striped={true}
            responsive={true}
            pagination={true}
            highlightOnHover={true}
            subHeaderAlign="center"
            noHeader={true}
          />
    </>
  )
}

export default AllStudent
