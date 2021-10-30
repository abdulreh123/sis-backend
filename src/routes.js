import React from 'react';

const AllStudent = React.lazy(() => import('./views/students/AllStudent'));
const MyStudent = React.lazy(() => import('./views/students/Mystudents'));
const StudentCourses = React.lazy(() => import('./views/courses/MyCourses'));
const Register = React.lazy(() => import('./views/students/Register'));
const CreateDepartment = React.lazy(() => import('./views/departments/Create'));
const Department = React.lazy(() => import('./views/departments/AllDepartments'));
const Courses = React.lazy(() => import('./views/courses/AllCourses'));
const CreateCourses = React.lazy(() => import('./views/courses/Create'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const ChairmanDashboard = React.lazy(() => import('./views/dashboard/ChairmanDashboard'));
const AdvisorDashboard = React.lazy(() => import('./views/dashboard/AdvisorDashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const Groups = React.lazy(() => import('./views/courses/Groups'));
const CreateGroups = React.lazy(() => import('./views/courses/CreateGroup'));
const Buildings = React.lazy(() => import('./views/buildings/AllBuildings'));
const User = React.lazy(() => import('./views/users/User'));
const Profile = React.lazy(() => import('./views/profile/Profile'));
const StudentProfile = React.lazy(() => import('./views/profile/StudentProfile'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
export const publicRoutes = [
  { path: "/login", name: "Login Page", component: Login,},
]
export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    permissions:['Student',"SuperAdmin","Chairman","Advisor"]
  },
  {
    path: '/student',
    name: 'All Studnets',
    component: AllStudent,
    permissions:['Advisor','Chairman',"SuperAdmin"]
  },
  {
    path: '/mystudent',
    name: 'All Studnets',
    component: MyStudent,
    permissions:['Advisor',,"SuperAdmin"]
  },
  {
    path: '/my-courses',
    name: 'My courses',
    component: StudentCourses,
    permissions:['Student','Advisor','Chairman',"SuperAdmin"]
  },
  {
    path: '/registerStudent',
    name: 'Register Students',
    exact: true,
    component: Register,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/departments',
    name: 'Departments',
    exact: true,
    component: Department,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/createDepartment',
    name: 'Create Departments',
    exact: true,
    component: CreateDepartment,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/courses',
    name: 'Courses',
    exact: true,
    component: Courses,
    permissions:['Student','Advisor','Chairman',"SuperAdmin"]
  },
  {
    path: '/create-courses',
    name: 'CreateCourses',
    exact: true,
    component: CreateCourses,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/groups',
    name: 'Course group',
    exact: true,
    component: Groups,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/create-groups',
    name: 'Create group',
    exact: true,
    component: CreateGroups,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/buildings',
    name: 'Buildings',
    exact: true,
    component: Buildings,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/users',
    exact: true,
    name: 'Users',
    component: Users,
    permissions:['Chairman',"SuperAdmin"]
  },
  {
    path: '/users/:id',
    exact: true,
    name: 'User Details',
    component: User,
    permissions:['Advisor','Chairman',"SuperAdmin"]
  },
  {
    path: '/profile',
    exact: true,
    name: 'Profile',
    component: Profile,
    permissions:['Student','Advisor','Chairman',"SuperAdmin"]
  },
  {
    path: '/student-profile/:id',
    exact: true,
    name: 'Student profile',
    component: StudentProfile,
    permissions:['Advisor','Chairman',"SuperAdmin"]
  }
];

