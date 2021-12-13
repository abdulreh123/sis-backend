import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {
    CWidgetDropdown,
    CRow,
    CCol,
} from '@coreui/react'
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
                <Link style={{cursor:"pointer"}} to={`/courseDashboard/${group.id}`}>
                    <CWidgetDropdown
                        color="gradient-primary"
                        header={group.name}
                        text="students:12"
                    >
                    </CWidgetDropdown>
                </Link>
                </CCol>
            )}

        </CRow>
    )
}

export default WidgetsDropdown
