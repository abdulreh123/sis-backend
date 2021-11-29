import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import {
  CButton,
} from '@coreui/react'
import {
  fetchRooms, getRooms
} from "../../actions/roomActions";
import {
  fetchBuildings
} from "../../actions/buildingActions";
import Add from './Create'
import Edit from './Edit'

const Button = styled(CButton)`
width: 4rem;
`;
const AllRooms = () => {
  const rooms = useSelector((state) => state.rooms.rooms);
  const room = useSelector((state) => state.rooms.room);
  const [addModal, setAddModal] = useState(false)
  const [editModal, toggleEditModal] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchBuildings());
  }, [dispatch, room]);

  let columns = [
    {
      selector: "name",
      name: "Name",
      sortable: true,
    },
    {
      selector: "building",
      name: "Building",
      sortable: true,
      cell: (row) => (
        <span>{row.Buildings.name}</span> 
      )
    },
    {
      selector: "longitude",
      name: "Longitude",
      sortable: true
    },
    {
      selector: "latitude",
      name: "Latitude",
      sortable: true
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="table-icon">
          <span
            style={{ margin: '1rem' }}
            onClick={() => {
              toggleEditModal(!editModal);
              dispatch(getRooms(row.id));
            }}
          >
            Edit
          </span>
          <span >
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
      <Add modal={addModal} setModal={setAddModal} />
      <Button block color="primary" onClick={() => setAddModal(true)}>Add</Button>
      <Edit modal={editModal} setModal={toggleEditModal} />
      <DataTable
        columns={columns}
        data={rooms ? rooms : []}
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

export default AllRooms
