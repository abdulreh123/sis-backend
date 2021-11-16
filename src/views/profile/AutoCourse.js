import React, { useState } from 'react'
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
    automate
} from "../../actions/studentsActions";
const MultiSelectLabel = styled.span`
  font-size: 0.8rem;
  color: var(--secondary-text-color);
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
    grid-template-columns: 33% 46% 20% ;
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
const Modals = (props) => {
    const studentId = props.studentId
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.student.autoCourse);
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        dispatch(automate(studentId, value));
    }
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
        },
        {
            selector: "credit",
            name: "Credit",
            sortable: true,
        },
    ];
    return (
        <CRow>
            <CCardBody>
                <CModal
                    show={props.modal}
                    onClose={() => props.setModal(!props.modal)}
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
                                            <option value="2021-2022 - Fall">2021-2022 - Fall</option>
                                            <option value="2021-2022 - Spring">2021-2022 - Spring</option>
                                            <option value="2021-2022 - Summer">2021-2022 - Summer</option>
                                    </CSelect>
                                </CFormGroup>
                            </CForm>

                            <DataTable>
                                <CellHead>Code</CellHead>
                                <CellHead>Name</CellHead>
                                <CellHead>Credit</CellHead>
                                {courses.map((log, index) =>
                                    <>
                                        <Cell>{log.code}</Cell>
                                        <Cell>{log.name}</Cell>
                                        <Cell>{log.credit}</Cell></>

                                )}
                            </DataTable>
                        </CCardBody>
                    </CModalBody>
                    <CModalFooter>
                    </CModalFooter>
                </CModal>
            </CCardBody>
        </CRow>
    )
}

export default Modals
