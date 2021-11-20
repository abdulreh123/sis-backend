import React,{useEffect} from 'react'
import {
    CWidgetDropdown,
    CRow,
    CCol,
} from '@coreui/react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import { getadvisor } from 'src/actions/advisorActions'
import { useSelector, useDispatch } from "react-redux";

const WidgetsDropdown = () => {
    const user = useSelector((state) => state.auth.user);
    const advisor = useSelector((state) => state.advisor.advisor);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getadvisor(user?.userId));
    }, [dispatch, user]);
    // render
    return (
        <CRow>
            {advisor?.Group?.map(group =>
                <CCol sm="6" lg="3">
                    <CWidgetDropdown
                        color="gradient-primary"
                        header={group.name}
                        text="students:12"
                    >
                    </CWidgetDropdown>
                </CCol>
            )}

        </CRow>
    )
}

export default WidgetsDropdown
