import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import Edit from './EditStudent'
import {
  getStudentByAdvisor,
} from "../../actions/studentsActions";
import styled from 'styled-components'
const LinkName = styled(Link)`
  color: #8d0000 !important;
`;
const MyStudent = () => {
    const students = useSelector((state) => state.student.advisor);
    const advisor = useSelector((state) => state.auth.user.userId);
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudentByAdvisor(advisor));
    }, [dispatch]);

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
      ];
  return (
      <>
    <Edit modal={modal} setModal={setModal}/>
    <DataTable
            columns={columns}
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

export default MyStudent
