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
const AllAdvisor = () => {
    const students = useSelector((state) => state.advisor.advisors);
    const advisors = useSelector((state) => state.advisor.advisor);
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdvisor());
    }, [dispatch,advisors]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,
          cell: (row) => <LinkName to={`/advisorProfile/${row.id}`}>
            {row.name + " " + row.surname}
          </LinkName>},
     
        {
          selector: "Department",
          name: "Department",
          cell: row => (<span>{row.Department.name}</span>),
          sortable: true,},
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
            data={students ? students : []}
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

export default AllAdvisor
