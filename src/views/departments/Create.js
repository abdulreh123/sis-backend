import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch,useSelector } from "react-redux";
import {
    fetchChairman,
} from "../../actions/chairmanActions";
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
    AddDepartment,
} from "../../actions/departmentActions";
const Create = () => {
    
    const chairman = useSelector((state) => state.chairmans.chairmans);
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name==='chairmanId'){
            setData({
                ...data,
                [name]: parseInt(value)
            })
        }
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddDepartment({ ...data }));
        document.getElementById("resetDepartment").reset()
    }
    const reset = (e) => {
        document.getElementById("resetDepartment").reset()
    }
    useEffect(() => {
        dispatch(fetchChairman());
    }, [dispatch]);
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Create Department
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetDepartment">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">Chairman
                                <CLabel htmlFor="select">Select</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="chairmanId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>{chairman?.map(dep=>
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

