import React from 'react'
import { useSelector } from "react-redux";
import Advisor from './AdvisorProfile'
import Student from './StudentProfiles'

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
  {user?.status==="Advisor"? <Advisor />:null}
  {user?.status==="Student"? <Student />:null}
  </>
  )
}

export default Profile
