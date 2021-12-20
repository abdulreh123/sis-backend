import React, { lazy,useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import { useSelector, useDispatch } from "react-redux";
import Annoucements from './Annoucements'
import {
    getTimeTable
} from "../../actions/studentsActions";
import Timetable from 'react-timetable-events'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  const timeTable = useSelector((state) => state.student.timeTable);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if(user)
      dispatch(getTimeTable(user.Id));
  }, [dispatch,user]);
  const monday =timeTable[0]?.monday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const tuesday =timeTable[1]?.tuesday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const wednesday =timeTable[2]?.wednesday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const thursday =timeTable[3]?.thursday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const friday =timeTable[4]?.friday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const saturday =timeTable[5]?.saturday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  return (
    <>
      <WidgetsDropdown />
      <Annoucements />
      <h3 style={{marginTop: '1rem'}}>Your Time Table</h3>
      <div style={{marginTop: '1rem'}}>
            <Timetable
                  hoursInterval= {{ from: 9, to: 20 }}
                  getDayLabel={((day) => day.slice(0,3))}
                    events={{
                      monday:monday ,
                      tuesday: tuesday,
                      wednesday: wednesday,
                      thursday: thursday,
                      friday: friday,
                      saturday: saturday,
                    }}
                  />
                  </div>
         
    </>
  )
}

export default Dashboard
