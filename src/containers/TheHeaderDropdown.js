import React from 'react'
import { useDispatch } from "react-redux";
import { useHistory,Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  logOutUser,
} from "../actions/authActions";

const TheHeaderDropdown = () => {
  const dispatch = useDispatch();  
  let history = useHistory();
  const logOut = async ()=>{
    dispatch(logOutUser())
  }
  const action =async()=>{
 await logOut()
 history.push(`/login`)
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <Link to={`/profile`} >
          <CIcon name="cil-user" className="mfe-2" />Profile
          </Link>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={action}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
