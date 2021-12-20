import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import {
  getTranscript,getStudent
} from "../../actions/studentsActions";
import styled from 'styled-components';
const BranchWrapper = styled.div`
`;
const Card = styled.div`
  display: flex;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  flex-direction: column;
  color: ${(props) => props.color || "#4e4e51"};
  background: ${(props) => props.background || "#fff"};
  padding: ${(props) => props.padding || "10px 17px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: ${(props) => props.border || "1px solid #E6E9ED"};
  border-top: ${(props) => props.borderTop};
  opacity: 1;
  transition: all 0.2s ease;
  text-align: ${(props) => props.textAlign};
`;
const DataTable = styled(Card)`
    display: grid;
    grid-template-columns: 24% 40% 11% 10% 15%;
    border: 0.5px solid #e3e4e8 !important;
    margin: 1.5rem 2rem 2rem 2rem;
    padding: 0 !important;
`;
const Cell = styled.div`
    border: 0.5px solid #E6E9ED;
    height: 2rem;
    text-align: center;
    padding: 3px;
`;
const CellHead = styled.div`
    padding: 12px;
    border: 0.5px solid #E6E9ED;
    height: 3rem;
    text-align: center;
    font-weight: 550;
`;
const Category = styled.div`
    margin: 2rem 2rem 0 2rem;
    border-bottom: 1px solid #e3e4e8;
    font-size: 1.2rem;
`;
const Gpa = styled.p`
text-align: center;
`;
const StudentCourses = () => {
    const user = useSelector((state) => state.auth.user);
    const courses = useSelector((state) => state.student.studentCourse);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTranscript(user?.userId));
    }, [dispatch,user]);
  return (
    <BranchWrapper>
    {courses?.map((course, index) =>
        <div margin="2rem" key={index} >

            <Category>
            Academic year {course.year}
            </Category>
            <DataTable>
                <CellHead>Code</CellHead>
                <CellHead>Name</CellHead>
                <CellHead>Credit</CellHead>
                <CellHead>grade</CellHead>
                <CellHead>CrPts</CellHead>
                {course?.courses?.map((log, index) =>
                    <React.Fragment key={index} >
                        {log.studentscourses.academicYear=== course.year?
                            <>
                            <Cell>{log.Course.code}</Cell>
                                <Cell><Link to={`/courseDashboard/${log?.id}`}>{log.Course.name}</Link></Cell>
                                <Cell>{log.Course.credit}</Cell>
                                <Cell>{log.studentscourses?.grade}</Cell>
                                <Cell>{log.studentscourses?.CrPts}</Cell> </> :null}

                    </React.Fragment>

                )}
            </DataTable>
                        <Gpa>AVERAGE: {Number.parseFloat(course.gpa).toPrecision(3)} / OVERALL AVERAGE: {Number.parseFloat(course.cgpa).toPrecision(3)}/ STATUS : {course.status} / TOTAL : {course.totalcredit}</Gpa>

        </div>
    )}
</BranchWrapper>
  )
}

export default StudentCourses
