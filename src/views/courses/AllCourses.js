import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import Edit from './EditCourse'
import {
  fetchCourses, getCourse,deleteCourse
} from "../../actions/coursesActions";
const AllCourses = () => {
    const courses = useSelector((state) => state.courses.courses);
    const course = useSelector((state) => state.courses.course);
    const user = useSelector((state) => state.auth.user);
    const [modal, setModal] = useState(false)
    const StudentDepartment =courses.filter(course=>course.departmentId===user?.department.id || course.departmentId===4)
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
               style={{margin: '1rem',cursor:"pointer"}}
               onClick={() => {
                 setModal(!modal);
                 dispatch(getCourse(row.id))
                 // getDepartmentData(row.id);
               }}
              >
                  Edit
              </span>
              <span    style={{cursor:"pointer"}}
               onClick={() => {
                 dispatch(deleteCourse(row.id))
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
