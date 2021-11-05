import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
    CoursesApproval,Approval
} from "../../actions/studentsActions";
const ApproveCourses = (props) => {
    const studentId = props.studentId
    const courses = useSelector((state) => state.student.coursesToApprove);
    const aprooved = useSelector((state) => state.student.approveMessage);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CoursesApproval(studentId));
    }, [dispatch,aprooved,studentId]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,
          cell: row => (<span >{row.Course.name}</span>)
        },
        {
          selector: "code",
          name: "Code",
          sortable: true,
          cell: row => (<span >{row.Course.code}</span>)
        },
        {
          selector: "credit",
          name: "Credit",
          sortable: true,
          cell: row => (<span >{row.Course.credit}</span>)
        },
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem'}}
                onClick={() => {
                    dispatch(Approval(row.studentscourses.studentId,row.studentscourses.courseGroupId))
                }}
              >
                  Approve
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

export default ApproveCourses
