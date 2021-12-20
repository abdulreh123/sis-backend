import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import {
    getStudentAnnouncements,getDashboardAnnouncements
  } from "../../actions/annoucementActions";
const Container = styled.div`
 display: grid;
  grid-template-columns:  33% 33% 33% ;
  grid-gap: 10px;
  padding: 10px;
  background:#123878;
  border-radius: 9px;
`;


const Annoucements = (props) => {
  const user = useSelector((state) => state.auth.user);
  const data = useSelector((state) => state.announcements.announcements);
  const dispatch= useDispatch()

  useEffect(() => {
    if(user.status==='Student'){
      dispatch(getStudentAnnouncements(user?.Id));
    }else{
      dispatch(getDashboardAnnouncements());
    }
  }, [dispatch, user]);
  return (
    <>
        <div class="leftbox">
          <h2>Announcements</h2>
          <Container class="content">
            {data.map(announcement=>
            <div >
              {announcement.Group? 
              <h3 style={{color:'white',fontSize: '1.2rem'}}>{announcement?.Group?.name}</h3>:
              <h3 style={{color:'white'}}>{announcement?.sender}</h3>
              }
              <p style={{color:'white',fontSize: '0.6rem'}}>{announcement?.createdAt?.slice(0,10) +" "+ announcement?.createdAt?.slice(11,16)}</p>
              <p style={{color:'white'}}>{announcement?.content}</p>
            </div>
              )}
        </Container>

      </div>
    </>
  )
}

export default Annoucements
