import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    permissions:['Student','Advisor','Chairman',"SuperAdmin"],
  },
  {
    _tag: 'CSidebarNavTitle',
    permissions:['Advisor','Chairman',"SuperAdmin"],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    route: '/students',
    permissions:['Advisor','Chairman',"SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Students',
        to: '/student',
        permissions:['Chairman',"SuperAdmin"],
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'My Students',
        to: '/mystudent',
        permissions:['Advisor',"SuperAdmin"],
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register Students',
        to: '/registerStudent',
        permissions:['Chairman',"SuperAdmin"],
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Chairman',
    route: '/chairman',
    permissions:["SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Chairman',
        to: '/chairman',
        permissions:["SuperAdmin"],
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register Chairman',
        to: '/registerChairman',
        permissions:["SuperAdmin"],
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Advisors',
    route: '/advisor',
    permissions:['Chairman',"SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Advisors',
        to: '/All-Advisors',
        permissions:["SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Advisors',
        to: '/advisors',
        permissions:['Chairman']
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register Advisor',
        to: '/registerAdvisor',
        permissions:['Chairman',"SuperAdmin"],
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Departments',
    route: '/departments',
    permissions:["SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Departments',
        to: '/departments',
        permissions:["SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Department',
        to: '/createDepartment',
        permissions:["SuperAdmin"]
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Faculties',
    route: '/faculties',
    permissions:["SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'faculties',
        to: '/faculties',
        permissions:["SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Faculties',
        to: '/createFaculty',
        permissions:["SuperAdmin"]
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Courses',
    route: '/courses',
    permissions:['Student','Advisor','Chairman',"SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Courses',
        to: '/courses',
        permissions:['Student','Advisor','Chairman',"SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Course',
        to: '/create-courses',
        permissions:['Chairman',"SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transcript',
        to: '/my-courses',
        permissions:['Student',"SuperAdmin"]
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Groups',
    route: '/groups',
    permissions:['Chairman',"SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Course group',
        to: '/groups',
        permissions:['Chairman',"SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create group',
        to: '/create-groups',
        permissions:['Chairman',"SuperAdmin"]
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buildings',
    route: '/buildings',
    permissions:['Chairman',"SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buildings',
        to: '/buildings',
        permissions:['Chairman',"SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rooms',
        to: '/rooms',
        permissions:['Chairman',"SuperAdmin"]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Assign Rooms',
        to: '/group-rooms',
        permissions:['Chairman',"SuperAdmin"]
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    route: '/settings',
    permissions:['Chairman',"SuperAdmin"],
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Academic Year',
        to: '/settings',
        permissions:['Chairman',"SuperAdmin"]
      },
    ],
  },
  
]
export default _nav
