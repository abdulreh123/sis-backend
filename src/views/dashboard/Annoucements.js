import React, { lazy, useEffect, useState } from 'react'
import styled from 'styled-components';
const Container = styled.div`
 display: grid;
  grid-template-columns:  33% 33% 33% ;
  grid-gap: 10px;
  padding: 10px;
  background:#123878;
  border-radius: 9px;
`;


const Annoucements = (props) => {
  const stidentId = props?.match?.params?.id;


  return (
    <>
        <div class="leftbox">
          <h2>Announcements</h2>
          <Container class="content">
            <div >
              <h3 style={{color:'white'}}>December 25,2021</h3>
              <p style={{color:'white'}}>About vaccines validity </p>
            </div>
            <div >
              <h3 style={{color:'white'}}>December 29,2021</h3>
              <p style={{color:'white'}}>About Antigen Test</p>
            </div>
            <div>
              <h3 style={{color:'white'}}>January 1,2022</h3>
              <p style={{color:'white'}}>New year break</p>
            </div>
            <div>
              <h3 style={{color:'white'}}>January 22, 2022</h3>
              <p style={{color:'white'}}>Diploma approval procedures for the 2021-2022 fall semester graduates</p>
            </div>
        </Container>

      </div>
    </>
  )
}

export default Annoucements
