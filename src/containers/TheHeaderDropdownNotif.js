import React,{useEffect} from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CImg
} from '@coreui/react'
import styled from 'styled-components'
import CIcon from '@coreui/icons-react'
import { useSelector, useDispatch } from "react-redux";
import {
  getNotifications
} from "../actions/notificationActions";

const Image = styled(CImg)`
width:27% !important
`
const Menu = styled(CDropdownMenu)`
width:23rem !important
`
const Item = styled(CDropdownItem)`
white-space: break-spaces;
`
const TheHeaderDropdownNotif = () => {
  const user = useSelector((state) => state.auth.user);
  const notifications = useSelector((state) => state.notifications.general);
  const itemsCount1 = notifications.length>9?"9+":notifications.length
  const itemsCount = notifications.length===0? null :itemsCount1

  const dispatch = useDispatch()
  useEffect(() => {
    if(user?.status==="Advisor"){
      dispatch(getNotifications(user.Id));
    }else{
      if(user?.userId){
        dispatch(getNotifications(user?.userId));
      }
    }
  }, [dispatch,user]);
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell"/>
        <CBadge shape="pill" color="danger">{itemsCount}</CBadge>
      </CDropdownToggle>
      <Menu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have {itemsCount} notifications</strong>
        </CDropdownItem>
        {notifications?.map((state, index) => (
          <Item>  <Image
                src={'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              /> {state.content}</Item>
                ))}
        {/* <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress size="xs" color="info" value={25} />
          <small className="text-muted">348 Processes. 1/4 Cores.</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress size="xs" color="warning" value={70} />
          <small className="text-muted">11444GB/16384MB</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress size="xs" color="danger" value={90} />
          <small className="text-muted">243GB/256GB</small>
        </CDropdownItem> */}
      </Menu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif