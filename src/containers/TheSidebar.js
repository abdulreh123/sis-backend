import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const status = useSelector(state => state.auth.user?.status)
  const permitedNav =navigation.map(nav=>{
    let navs
    const children =nav._children
    let childrens=[]
    if(nav.permissions?.includes(status)){
      children?.map(child=>{
        if(child.permissions.includes(status)){
          childrens.push(child)
        }
      })
      if(childrens.length>0){
        navs={
         _tag: nav?._tag,
         name: nav?.name,
         route: nav?.route,
         icon: nav?.icon,
         _children:childrens
       }
      }else{
        navs={
         _tag: nav?._tag,
         name: nav?.name,
         to: nav?.to,
         icon: nav?.icon,
       }  
      }
      return navs
    }})
    const filtered =permitedNav.filter(nav=>nav!==undefined)
  
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          src="https://neu.edu.tr/wp-content/uploads/2018/11/01/neu-42-years-in-education.png"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={filtered}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
