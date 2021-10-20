import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBuildings
} from "../../actions/buildingActions";
const AllBuildings = () => {
    const buildings = useSelector((state) => state.building.buildings);
    const building = useSelector((state) => state.building.buildings);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBuildings());
    }, [dispatch,building]);

    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true,},
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
              style={{margin: '1rem'}}
                // onClick={() => {
                //   toggleEditModal(!editModal);
                //   getDepartmentData(row.id);
                // }}
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
    
    <DataTable
            columns={columns}
            data={buildings ? buildings : []}
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

export default AllBuildings
