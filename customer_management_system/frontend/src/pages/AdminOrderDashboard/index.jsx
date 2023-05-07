import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../app/actions/Order.actions";
import jsPDF from "jspdf";
import "jspdf-autotable";
import OrderTable from "../../components/OrderTable";

function AdminOrderDashboard() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order && state.order.orders);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    if (orders) {
      setOrderList(orders);
    }
  }, [orders]);

  const filterData = (searchWord) => {
    let newArray = orders && orders.filter(function (el) {
      return el.teatype.toLowerCase().includes(searchWord.toLowerCase());
    });
    setOrderList(newArray || []);
  };

  function generatePDF(data) {
    const doc = new jsPDF();
    const tableColumn = ["Order No", "First Name", "Last Name", "Contact", "Email", "Tea Type", "Tea Brand", "Quantity", "Date to be delivered", "Address"];
    const tableRows = [];

    data.forEach((item, index) => {
      const rowData = [        index + 1,        item.fname,        item.lname,        item.contactNumber,        item.email,        item.teatype,        item.teaBrand,        item.quantity,        item.datetobedelivered,        item.address,      ];
      tableRows.push(rowData);
    });
    
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: "auto" },
        2: { cellWidth: "auto" },
        3: { cellWidth: "auto" },
        4: { cellWidth: "auto" },
        5: { cellWidth: "auto" },
        6: { cellWidth: "auto" },
        7: { cellWidth: "auto" },
        8: { cellWidth: "auto" },
        9: { cellWidth: "auto" },
      },
      styles: {
        cellPadding: 1,
        fontSize: 8,
      },
    });
    doc.save("order-table.pdf");
}


  return (
    <div className="card container mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-4">
          <h3>My Order Details</h3>
        </div>
        <div className="col-4">
          <button
            className="btn btn-info"
            onClick={() => {
              generatePDF(orderList);
            }}
          >
            PRINT
          </button>          
        </div>
        <div className="col-4">
          <input
            type="text"
            onChange={(e) => filterData(e.target.value)}
            name="search"
            placeholder="search..."
            className="form-control"
          />
        </div>
      </div>
      <OrderTable dataArray={orderList} />
    </div>
  );
}

export default AdminOrderDashboard;
