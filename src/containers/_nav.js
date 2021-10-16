import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    permissions:['Student','Advisor','Chairman'],
  },
  {
    _tag: 'CSidebarNavTitle',
    permissions:['Advisor','Chairman'],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    route: '/students',
    icon: 'cil-user',
    permissions:['Advisor','Chairman'],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'My Students',
        to: '/student',
        permissions:['Advisor','Chairman'],
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register Students',
        to: '/registerStudent',
        permissions:['Chairman'],
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Departments',
    route: '/departments',
    icon: 'cil-building',
    permissions:['Chairman'],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Departments',
        to: '/departments',
        permissions:['Chairman']
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Department',
        to: '/createDepartment',
        permissions:['Chairman']
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Courses',
    route: '/courses',
    icon: 'cil-book',
    permissions:['Student','Advisor','Chairman'],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Courses',
        to: '/courses',
        permissions:['Student','Advisor','Chairman']
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Course',
        to: '/create-courses',
        permissions:['Chairman']
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transcript',
        to: '/my-courses',
        permissions:['Student']
      },
    ],
  },
  
]
export default _nav
