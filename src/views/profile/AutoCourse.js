import React, { useState,useEffect } from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
    CButton,
    CCardBody,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CFormGroup,
    CRow,
    CSelect,
    CForm,
} from '@coreui/react'
import styled from 'styled-components'
import {
    AddRemoveCourses
 } from "../../actions/studentsActions";
 import {
    checkClash
 } from "../../actions/groupActions";
import {
    automate
} from "../../actions/studentsActions";
const MultiSelectLabel = styled.span`
  font-size: 0.8rem;
  color: var(--secondary-text-color);
`;

const Modals = (props) => {
    const studentId = props.studentId
    let arrayYears =[]
    const dispatch = useDispatch()
    const [selected, setSelected] = useState([])
    const [button, showButton] = useState(false)
    const [year, setyear] = useState('');
    const courses = useSelector((state) => state.student.autoCourse);
    const user = useSelector((state) => state.auth.user);
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        setyear(value)
        dispatch(automate(studentId, value));
    }
    const acayear1 =user? JSON.parse(user?.year.slice(0,4)):2021
    const years=()=>{
        console.log(acayear1)
        for (let i = acayear1; i < acayear1+4; i++) {
            arrayYears.push(`${i}-${i+1} - Fall`)
            arrayYears.push(`${i}-${i+1} - Spring`)
          }
    }

    years()
    let columns = [
        {
            selector: "name",
            name: "name",
            sortable: true,
        },
        {
            selector: "code",
            name: "Code",
            sortable: true,
            cell:(row) => (<span>{row.Course? row.Course?.code :row.code}</span>)
        },
        {
            selector: "credit",
            name: "Credit",
            sortable: true,
            cell:(row) => (<span>{row.Course? row.Course?.credit: row.credit}</span>)
        },
    ];
    const rowSelectChange = (row) => {
        if (row.selectedRows.length !== 0) {
          showButton(true)
        }
        if (row.selectedRows.length === 0) {
          showButton(false)
        }
        setSelected(row.selectedRows)
      }
      useEffect(() => {
        const courses = selected.map(course=>course.id)
        if(courses.length>0){
            dispatch(checkClash(courses));
        }
    }, [dispatch, selected]);
    const submit =(e)=>{
     e.preventDefault()
     const courses = selected.map(course=>course.id)
     const create = {
        type:'add',
        year: year,
        courses:courses
    }
    dispatch(AddRemoveCourses(studentId,{ ...create }));
    setSelected([])
    }
    return (
        <CRow>
            <CCardBody>
                <CModal
                    show={props.modal}
                    onClose={() => {props.setModal(!props.modal);showButton(false);setSelected([])}}
                    color="primary"
                    size="lg"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Next courses</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetAdd">
                                <CFormGroup row>
                                    <MultiSelectLabel>Acadamic Year :</MultiSelectLabel>
                                    <CSelect custom name="select" id="select" onChange={handleChange}>
                                        <option value="0">Please select</option>
                                        {arrayYears.map(yea=>
                                        <option value={yea}>{yea}</option>
                                            )}
                                    </CSelect>
                                </CFormGroup>
                            </CForm>
                            
                            {courses[0]?.Course?
                              
                                <DataTable
                                    columns={columns}
                                    data={courses ? courses : []}
                                    striped={true}
                                    responsive={true}
                                    pagination={true}
                                    highlightOnHover={true}
                                    subHeaderAlign="center"
                                    selectableRows
                                    onSelectedRowsChange={rowSelectChange}
                                    noHeader={true}
                                /> : 
                                <DataTable
                                    columns={columns}
                                    data={courses ? courses : []}
                                    striped={true}
                                    responsive={true}
                                    pagination={true}
                                    highlightOnHover={true}
                                    subHeaderAlign="center"
                                    noHeader={true}
                                />}
                        </CCardBody>
                        
                        {button? <CButton color="primary" onClick={submit}>Add</CButton>:null}
                    </CModalBody>
                    <CModalFooter>
                    </CModalFooter>
                </CModal>
            </CCardBody>
        </CRow>
    )
}

export default Modals
