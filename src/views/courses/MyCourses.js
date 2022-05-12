import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import {
    getTranscript,
} from "../../actions/studentsActions";
import styled from 'styled-components';
import {
    CFormGroup,
    CCol,
    CSelect,
} from '@coreui/react'
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

const grades = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF"]
const StudentCourses = () => {
    const user = useSelector((state) => state.auth.user);
    const courses = useSelector((state) => state.student.studentCourse);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(true);
    const filter = courses.filter(course => course.gpa === null)
    const dispatch = useDispatch();
    console.log(count)
    console.log(courses.length>0)
    if (count && courses.length>0) {
        console.log(count)
        const preCrp = filter[0]?.courses?.filter(course => course.studentscourses.grade !== null)
        console.log(preCrp)
        preCrp?.map(pre => {
            const store = {
                id: pre.id,
                grade: pre.studentscourses.grade,
                CrPts: JSON.parse(pre.studentscourses.CrPts),
                credit: 3
            }
            setData(arr => [...arr, store])
        })
        setCount(false)
    }
    useEffect(() => {
        dispatch(getTranscript(user?.userId));
    }, [dispatch, user]);
    const CalculateCrPoints = (grade, credit) => {
        let points: number | undefined;
        switch (grade) {
            case "AA":
                points = 4 * credit
                break;
            case "BA":
                points = 3.5 * credit
                break;
            case "BB":
                points = 3 * credit
                break;
            case "CB":
                points = 2.5 * credit
                break;
            case "CC":
                points = 2 * credit
                break;
            case "DC":
                points = 1.5 * credit
                break;
            case "DD":
                points = 1 * credit
                break;
            case "FD":
                points = 0.5 * credit
                break;
            case "FF":
                points = 0 * credit
                break;
        }
        return points
    }
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const newValue = JSON.parse(value);
        const calcultae = CalculateCrPoints(newValue.grade, newValue.credit)
        const store = {
            id: newValue.id,
            grade: newValue.grade,
            CrPts: calcultae,
            credit: newValue.credit
        }
        const final = data.filter(dat => dat.id !== newValue.id)
        setData(final)
        setData(arr => [...arr, store])
    }
    const displayPoints = (id) => {
        const crd = data.filter(course => course.id === id)
        return crd[0]?.CrPts
    }
    const displayGpa = () => {
        const sum = data.reduce((accumulator, object) => {
            return accumulator + object.CrPts;
        }, 0);
        const credit = data.reduce((accumulator, object) => {
            return accumulator + object.credit;
        }, 0);
        return (sum / credit).toPrecision(3)
    }
    const displayCGpa = () => {
        const sum1 = data.reduce((accumulator, object) => {
            return accumulator + object.CrPts;
        }, 0);
        const filter = courses.filter(course => course.gpa !== null)
        const credit1 = data.reduce((accumulator, object) => {
            return accumulator + object.credit;
        }, 0);
        if (filter.length > 0) {
            const sum = filter.reduce((accumulator, object) => {
                return accumulator + object.totalcrPts;
            }, 0);
            const credit = filter.reduce((accumulator, object) => {
                return accumulator + object.totalcredit;
            }, 0);
            return ((sum + sum1)/(credit1 + credit)).toPrecision(3)
        }else{
            return (sum1 / credit1).toPrecision(3)
        }
    }
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
                                {log.studentscourses.academicYear === course.year ?
                                    <>
                                        <Cell>{log.Course.code}</Cell>
                                        <Cell><Link to={`/courseDashboard/${log?.id}`}>{log.Course.name}</Link></Cell>
                                        <Cell>{log.Course.credit}</Cell>
                                        <Cell>{log.studentscourses?.grade ? log.studentscourses?.grade :

                                            <CFormGroup row>
                                                <CCol xs="12" md="20">
                                                    <CSelect custom name="grade" id="select" onChange={handleChange} >
                                                        <option value="0">Predict Grade</option>
                                                        {grades.map(dep =>
                                                            <option value={`{"grade":"${dep}","id":${log?.id},"credit":${log.Course.credit}}`}>{dep}</option>
                                                        )}
                                                    </CSelect>
                                                </CCol>
                                            </CFormGroup>
                                        }</Cell>
                                        <Cell>{log.studentscourses?.CrPts ? log.studentscourses?.CrPts : displayPoints(log?.id)}</Cell> </> : null}

                            </React.Fragment>

                        )}
                    </DataTable>
                    <Gpa>GPA: {course.gpa ? Number.parseFloat(course.gpa).toPrecision(3) : displayGpa()} / CGPA: {course.cgpa?Number.parseFloat(course.cgpa).toPrecision(3):displayCGpa()}/ STATUS : {course.status} / TOTAL CREDIT: {course.totalcredit}</Gpa>

                </div>
            )}
        </BranchWrapper>
    )
}

export default StudentCourses
