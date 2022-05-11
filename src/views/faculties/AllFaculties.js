import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import Edit from './Edit'
import {
  fetchFaculty,deleteFaculty,getFaculty
} from "../../actions/facultyActions";
import {
    fetchChairman,
} from "../../actions/chairmanActions";
const AllDepartments = () => {
    const faculties = useSelector((state) => state.faculty.faculties);
    const user = useSelector((state) => state.auth.user);
    const faculty = useSelector((state) => state.faculty.faculty);
    const [editModal, toggleEditModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFaculty());
        dispatch(fetchChairman());
    }, [dispatch,faculty]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,},
        // {
        //   selector: "chairman",
        //   name: "chairman",
        //   sortable: true,
        //   cell: row => (<span>{row.chairman?.name}</span>)
        // },
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem',cursor:"pointer"}}
                onClick={() => {
                  toggleEditModal(!editModal);
                  dispatch(getFaculty(row.id));
                }}
              >
                  Edit
              </span>
              <span style={{cursor:"pointer"}}  onClick={() => {
                  dispatch(deleteFaculty(row.id))
                  // getDepartmentData(row.id);
                }}>
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
    <Edit modal={editModal} setModal={toggleEditModal}/>
    <DataTable
            columns={user?.status==='Chairman'|| user?.status==='SuperAdmin'	?columns :studentCol}
            data={faculties ? faculties : []}
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

export default AllDepartments
