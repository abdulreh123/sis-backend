import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import Edit from './EditCourse'
import {
  fetchCourses, getCourse,deleteCourse
} from "../../actions/coursesActions";
import {
  getTranscript
} from "../../actions/studentsActions";
const AllCourses = () => {
    const courses = useSelector((state) => state.courses.courses);
    const course = useSelector((state) => state.courses.course);
    const user = useSelector((state) => state.auth.user);
    const studentCourses = useSelector((state) => state.student.studentCourse);
    const [modal, setModal] = useState(false)
    let coursesShown 
    if(user?.status==="SuperAdmin"){
      coursesShown=courses
    }else{
      coursesShown =courses.filter(course=>(course.departmentId===4 && course.facultyId===user?.faculty.id )||  course.departmentId===user?.department.id )
    }
    let swa = []
    const myCourses = studentCourses.map(coursew=>{swa.push(...coursew?.courses)})
    console.log(swa)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch,course]);
    useEffect(() => {
      if(user?.status==="Student"){
        dispatch(getTranscript(user?.userId));
      }
  }, [dispatch,user]);
    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,
          cell: (row) => {
            const done = swa.filter(swa=>swa.Course.id===row.id)
            if(done.length>0){
              return(
                <p style={{ color: 'red' }}>{row.name}</p>
              )
            }else{
              return(
                <p >{row.name}</p>
              )
            }
          }
        },
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
    <h2>{user?.department?.name} courses</h2>
    <DataTable
            columns={user?.status==='Chairman'|| user?.status==='SuperAdmin'	?columns :studentCol}
            data={coursesShown ? coursesShown : []}
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
