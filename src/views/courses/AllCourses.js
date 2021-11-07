import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCourses
} from "../../actions/coursesActions";
const AllCourses = () => {
    const courses = useSelector((state) => state.courses.courses);
    const course = useSelector((state) => state.courses.course);
    const user = useSelector((state) => state.auth.user);
    const StudentDepartment =courses.filter(course=>course.departmentId===user.department.id)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch,course]);

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
            data={StudentDepartment ? StudentDepartment : []}
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
