import React,{useEffect,useState} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import Edit from './EditChairman'
import {
  fetchChairman,getChairman,deleteChairman
} from "../../actions/chairmanActions";
import styled from 'styled-components'
const LinkName = styled(Link)`
  color: #8d0000 !important;
`;
const AllChairman = () => {
    const chairmans = useSelector((state) => state.chairmans.chairmans);
    const chairman = useSelector((state) => state.chairmans.chairman);
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChairman());
    }, [dispatch,chairman]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,
          cell: (row) => 
            <span>{row.name + " " + row.surname}</span>
          },
     
        {
          selector: "Department",
          name: "Department",
          cell: row => (<span>{row?.Department?.name}</span>),
          sortable: true,},
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem',cursor:"pointer"}}
                onClick={() => {
                  setModal(!modal);
                  dispatch(getChairman(row.id));
                }}
              >
                  Edit
              </span>
              <span style={{cursor:"pointer"}} onClick={() => {
                  dispatch(deleteChairman(row.id));
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
            data={chairmans ? chairmans : []}
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

export default AllChairman
