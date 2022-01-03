import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import Edit from './Edit'
import {
  fetchDepartment,deleteDepartment,getDepartment
} from "../../actions/departmentActions";
import {
    fetchChairman,
} from "../../actions/chairmanActions";
const AllDepartments = () => {
    const departments = useSelector((state) => state.department.departments);
    const user = useSelector((state) => state.auth.user);
    const department = useSelector((state) => state.department.department);
    const [editModal, toggleEditModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDepartment());
        dispatch(fetchChairman());
    }, [dispatch,department]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,},
        {
          selector: "chairman",
          name: "chairman",
          sortable: true,
          cell: row => (<span>{row.chairman?.name}</span>)
        },
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem',cursor:"pointer"}}
                onClick={() => {
                  toggleEditModal(!editModal);
                  dispatch(getDepartment(row.id));
                }}
              >
                  Edit
              </span>
              <span style={{cursor:"pointer"}}  onClick={() => {
                  dispatch(deleteDepartment(row.id))
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
            data={departments ? departments : []}
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
