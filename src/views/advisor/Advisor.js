import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import Edit from './EditAdvisor'
import {
  fetchAdvisor,deleteAdvisor,getadvisor
} from "../../actions/advisorActions";
import styled from 'styled-components'
const LinkName = styled(Link)`
  color: #8d0000 !important;
`;
const MyStudent = () => {
    const advisors = useSelector((state) => state.advisor.advisors);
    const advisor = useSelector((state) => state.advisor.advisor);
    const department = useSelector((state) => state.auth.user.department.id);
    const data= advisors.filter(advisor=>advisor.departmentId===department)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdvisor());
    }, [dispatch,advisor]);

    let columns = [
      {
        selector: "name",
        name: "Name",
        sortable: true,
        cell: (row) => <LinkName to={`/advisorProfile/${row.id}`}>
          {row.name + " " + row.surname}
        </LinkName>
      },
      {
        name: "Actions",
        cell: (row) => (
          <div className="table-icon">
            <span
              style={{margin: '1rem',cursor:"pointer"}}
              onClick={() => {
                setModal(!modal);
                dispatch(getadvisor(row.id));
              }}
            >
                Edit
            </span>
            <span style={{cursor:"pointer"}} onClick={() => {
                  dispatch(deleteAdvisor(row.id));
                }}>
                Delete
            </span>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
      },
      ];
  return (
      <>
    <Edit modal={modal} setModal={setModal}/>
    <DataTable
            columns={columns}
            data={data ? data : []}
            striped={true}
            responsive={true}
            pagination={true}
            highlightOnHover={true}
            subHeaderAlign="center"
            noHeader={true}
          />
    </>
  )
}

export default MyStudent
