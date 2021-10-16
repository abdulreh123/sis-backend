import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDepartment
} from "../../actions/departmentActions";
const AllDepartments = () => {
    const departments = useSelector((state) => state.department.departments);
    const department = useSelector((state) => state.department.department);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDepartment());
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
