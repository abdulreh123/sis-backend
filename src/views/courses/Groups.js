import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGroup
} from "../../actions/groupActions";
const AllCourses = () => {
    const Groups = useSelector((state) => state.group.roups);
    const Group = useSelector((state) => state.group.group);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGroup());
    }, [dispatch,Group]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,},
        {
          selector: "code",
          name: "Code",
          sortable: true
        },
        {
          selector: "semester",
          name: "Semester",
          sortable: true
        },
        {
          selector: "credit",
          name: "Credit",
          sortable: true
        },
        {
          selector: "ECT5",
          name: "ECT5",
          sortable: true
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
            data={courses ? courses : []}
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

export default AllCourses
