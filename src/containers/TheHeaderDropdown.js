import React from 'react'
import { useDispatch,useSelector } from "react-redux";
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

const TheHeaderDropdown = (props) => {
  const dispatch = useDispatch();
   const user= props.user
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
          {user?.Id===2?
          <CImg
              src={'avatars/6.jpg'}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />:
            <CImg
                src={'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />}
          
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
