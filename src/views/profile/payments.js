import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
    getpaymentStudent
} from "../../actions/paymentActions";
const MyPayments = (props) => {
    const studentId = props.studentId
    const payments = useSelector((state) => state.payments.payments);
    const payment = useSelector((state) => state.payments.payment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getpaymentStudent(studentId));
    }, [dispatch,payment,studentId]);
    const openInNewTab = (image) => {
        const newWindow = window.open(`http://localhost:7000/static/assets/uploads/payments/${image}`, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    let columns = [
        {
          selector: "type",
          name: "Type",
          sortable: true,},
        {
          selector: "year",
          name: "Semester",
          sortable: true,
        },
        {
          selector: "amount",
          name: "Amount",
          sortable: true,
        },
        {
          selector: "receipt",
          name: "Receipt",
          sortable: true,
          cell: row => (<span onClick={()=>openInNewTab(row.image)}>receipt</span>)
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
            data={payments ? payments : []}
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

export default MyPayments
