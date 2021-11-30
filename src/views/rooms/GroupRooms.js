import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch,useSelector } from "react-redux";
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
} from '@coreui/react'
import {
    getAvailableRooms,
    AddRoomGroup
} from "../../actions/roomActions";
import {
    fetchGroup
} from "../../actions/groupActions";
const Create = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.rooms);
    const groups = useSelector((state) => state.group.groups);
   
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value
        })
    }
    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddRoomGroup({ ...data }));
        document.getElementById("resetCourse").reset()
    }
    const reset = (e) => {
        document.getElementById("resetCourse").reset()
    }    
    useEffect(() => {
        dispatch(getAvailableRooms(data.day,data.timeStart,data.timeEnd));
        dispatch(fetchGroup());
    }, [dispatch,data]);
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Assign rooms
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetCourse">
                       
                    <CFormGroup row>
                            <CCol md="3">Day
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="day" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Start</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="time" name="timeStart" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">End</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="time" name="timeEnd" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Room
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="roomId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {rooms.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Course
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="groupId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {groups.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={handleSubmit} /> Submit</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" onClick={reset} /> Reset</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    )
}

export default Create

