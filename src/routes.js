import React from 'react';

const AllStudent = React.lazy(() => import('./views/students/AllStudent'));
const StudentCourses = React.lazy(() => import('./views/courses/MyCourses'));
const Register = React.lazy(() => import('./views/students/Register'));
const CreateDepartment = React.lazy(() => import('./views/departments/Create'));
const Department = React.lazy(() => import('./views/departments/AllDepartments'));
const Courses = React.lazy(() => import('./views/courses/AllCourses'));
const CreateCourses = React.lazy(() => import('./views/courses/Create'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Profile = React.lazy(() => import('./views/profile/Profile'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
export const publicRoutes = [
  { path: "/login", name: "Login Page", component: Login,},
]
export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    permissions:['Student','Advisor','Chairman']
  },
  {
    path: '/student',
    name: 'All Studnets',
    component: AllStudent,
    permissions:['Advisor','Chairman']
  },
  {
    path: '/my-courses',
    name: 'My courses',
    component: StudentCourses,
    permissions:['Student','Advisor','Chairman']
  },
  {
    path: '/registerStudent',
    name: 'Register Students',
    exact: true,
    component: Register,
    permissions:['Chairman']
  },
  {
    path: '/departments',
    name: 'Departments',
    exact: true,
    component: Department,
    permissions:['Chairman']
  },
  {
    path: '/createDepartment',
    name: 'Create Departments',
    exact: true,
    component: CreateDepartment,
    permissions:['Chairman']
  },
  {
    path: '/courses',
    name: 'Courses',
    exact: true,
    component: Courses,
    permissions:['Student','Advisor','Chairman']
  },
  {
    path: '/create-courses',
    name: 'CreateCourses',
    exact: true,
    component: CreateCourses,
    permissions:['Chairman']
  },
  {
    path: '/users',
    exact: true,
    name: 'Users',
    component: Users,
    permissions:['Chairman']
  },
  {
    path: '/users/:id',
    exact: true,
    name: 'User Details',
    component: User,
    permissions:['Advisor','Chairman']
  },
  {
    path: '/profile',
    exact: true,
    name: 'Profile',
    component: Profile,
    permissions:['Student','Advisor','Chairman']
  }
];

