import React, { useEffect, useState } from 'react'
import {
    CButton,
} from '@coreui/react'
import Payment from './Addpayment'
import AllPayment from './payments'
import { useSelector, useDispatch } from "react-redux";
import AddCourse from './AddCourse'
import AutoCourse from './AutoCourse'
import styled from 'styled-components';
import {
    getGroupDepartment
} from "../../actions/groupActions";
const IMG = styled.img`
  width:47%;
  `

const Button = styled(CButton)`
margin-left: 1rem;
`;
const AddButton = styled(CButton)`
margin-right: 1rem;
`;
const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const student = user?.Id
    const dispatch = useDispatch()
    const [paymentmodal, setPaymentModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [autoModal, setAutoModal] = useState(false)
    useEffect(() => {
        dispatch(getGroupDepartment(user?.department.id));
    }, [])
    return (
        <div class="student-profile py-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                            <div class="card-header bg-transparent text-center">
                                <IMG
                                    src={'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'}
                                    className="c-avatar-img"
                                    alt="admin@bootstrapmaster.com"
                                />
                                <h3>{user?.name}</h3>
                            </div>
                            <div class="card-body">
                                <p class="mb-0"><strong class="pr-1">ID:</strong>{user?.userId}</p>
                                <p class="mb-0"><strong class="pr-1">Department:</strong>4</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card shadow-sm">
                            <div class="card-header bg-transparent border-0">
                                <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
                            </div>
                            <div class="card-body pt-0">

                                <table class="table table-bordered">
                                    <tr>
                                        <th width="30%">Roll</th>
                                        <td width="2%">:</td>
                                        <td>125</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Academic Year	</th>
                                        <td width="2%">:</td>
                                        <td>2020</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Gender</th>
                                        <td width="2%">:</td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Religion</th>
                                        <td width="2%">:</td>
                                        <td>Group</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">blood</th>
                                        <td width="2%">:</td>
                                        <td>B+</td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
