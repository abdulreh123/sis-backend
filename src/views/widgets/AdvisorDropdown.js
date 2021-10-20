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
                        footerSlot={
                            <ChartLineSimple
                                pointed
                                className="c-chart-wrapper mt-3 mx-3"
                                style={{ height: '70px' }}
                                dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                                pointHoverBackgroundColor="primary"
                                label="Members"
                                labels="months"
                            />
                        }
                    >
                    </CWidgetDropdown>
                </CCol>
            )}

        </CRow>
    )
}

export default WidgetsDropdown
