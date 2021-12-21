import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Snackbar} from './reactAlert'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  getCurrentUser
} from "../actions/authActions";
import {
  ShowSidebar,
  HideSidebar,
  ResponsoneSidebar
} from "../actions/sidebarActions";

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebar.show)
  const user = useSelector(state => state.auth.user)
  let { msg, status } = useSelector(state => state.errors);

  const toggleSidebar = () => {
    [true, 'responsive'].includes(sidebarShow) ?
    dispatch(HideSidebar()) : dispatch(ResponsoneSidebar())
  }

  const toggleSidebarMobile = () => {
    [false, 'responsive'].includes(sidebarShow) ?
    dispatch(ShowSidebar()) : dispatch(ResponsoneSidebar())
  }
  useEffect(() => {
      dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon
         className="c-sidebar-brand-full"
          name="logo-negative"
          src="https://neu.edu.tr/wp-content/uploads/2018/11/01/neu-42-years-in-education.png"
          height={40}/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
        </CHeaderNavItem>
      </CHeaderNav>
            <Snackbar type={status} message={msg} />
      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif/>
        {/* 
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}
        <TheHeaderDropdown user={user}/>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
