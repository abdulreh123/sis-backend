import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudents,
} from "../../actions/studentsActions";
const AllStudent = () => {
    const students = useSelector((state) => state.student.students);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStudents());
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
          sortable: true,},
        {
          selector: "surname",
          name: "Surname",
          sortable: true,},
        {
          selector: "createdAt",
          name: "Registered",
          cell: row => (<span>{row.createdAt.replace('T', ' ').replace('.000Z', '')}</span>),
          sortable: true,},
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem'}}
                // onClick={() => {
                //   toggleEditModal(!editModal);
                //   getDepartmentData(row.id);
                // }}
              >
                  Edit
              </span>
              <span >
                  Delete
              </span>
            </div>
          ),
          ignoreRowClick: true,
          allowOverflow: true,
        },
      ];
  return (
      <>
    
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

export default AllStudent
