import React, { useState } from 'react'
import {
  CButton,
  CCardBody,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CSelect,
  CInput,
  CLabel,
} from '@coreui/react'
import {
  AddRooms
} from "../../actions/roomActions";
import {  useDispatch,useSelector } from "react-redux";
const Modals = (props) => {
    const [data, setData] = useState({});
    const buildings = useSelector((state) => state.building.buildings);
    const dispatch = useDispatch();
   
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddRooms({ ...data }));
        document.getElementById("resetBuilding").reset()
    }
  return (
    <CRow>
          <CCardBody>
              <CModal 
              show={props.modal} 
              onClose={() => props.setModal(!props.modal)}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>New Building</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetBuilding">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                      
                        <CFormGroup row>
                            <CCol md="3">Building
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="buildingId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {buildings.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Longitude</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="float" name="longitude" onChange={handleChange}/>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Latitude</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="float" name="latitude" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        </CForm>
                </CCardBody>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={(e) => {props.setModal(!props.modal);handleSubmit(e)}}>
                  Add
                </CButton>{' '}
                <CButton color="secondary" onClick={() =>  props.setModal(!props.modal)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
          </CCardBody>
    </CRow>
  )
}

export default Modals
