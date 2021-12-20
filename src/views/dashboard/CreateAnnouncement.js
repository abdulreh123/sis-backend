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
  CLabel,
  CTextarea
} from '@coreui/react'
import {
    AddAnnouncements
  } from "../../actions/annoucementActions";
import {  useDispatch } from "react-redux";
const Modals = (props) => {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
   
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        setData(value)
    }
    const handleSubmit = (e) => {
        const create ={
            content:data,
            sender:props.name,
            groupId:props.groupId
        }
        e.preventDefault();
        dispatch(AddAnnouncements({ ...create }));
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
                <CModalTitle>Announcement</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetBuilding">
                        <CFormGroup row>
                            <CCol xs="12" md="9">
                                <CTextarea id="number-input" type="text" name="name" onChange={handleChange} />
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
