import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import useData from "../../../utils/Data";
import { useState } from "react";
import useFilterStore from "./../../../storages/FilterStore";


const ConsultancyView = ({ record }) => {
  
  const { deleteData } = useData();
  const { setUpdateKey } = useFilterStore(); 
  const [load, setLoad] = useState(true);
    
  const handleClickDelete = async () => {
    let choice = window.confirm("Delete record? This action is unreversible");
    if(choice === true) {
      setLoad(true);
      const response = await deleteData(record.id, "consultancy");
      alert(response);
      setLoad(false);
      setUpdateKey(new Date());
    }
    else {
      alert("Delete operation cancellled.");
    }

  }


  return (
    <div style={{ height: "60vh" }}>
      <h2>Additional Information</h2>

      <div className="wrapper">
        <MDBTable striped>
          <MDBTableBody>
            <tr>
              <th scope="row"> Company Name </th>
              <td> {record.company_name} </td>
            </tr>
            <tr>
              <th scope="row"> Type of Consultancy </th>
              <td> {record.type} </td>
            </tr>
            <tr>
              <th scope="row"> Start Date </th>
              <td> {record.start_date} </td>
            </tr>
            <tr>
              <th scope="row"> End Date </th>
              <td> {record.end_date} </td>
            </tr>
            <tr>
              <th scope="row"> Funding allocation status </th>
              <td> {record.funding_status} </td>
            </tr>
            <tr>
              <th scope="row"> Amount of funding registered </th>
              <td> {record.amount_registered} </td>
            </tr>
            <tr>
              <th scope="row"> Amount of funding sanctioned </th>
              <td> {record.amount_sanctioned} </td>
            </tr>
            <tr>
              <th scope="row"> Invoice Number </th>
              <td> {record.invoice_number} </td>
            </tr>
            <tr>
              <th scope="row"> Upload Link for Proof </th>
              <td> {record.upload_link} </td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        <button
          className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
          size="sm"
          color="dark"
          onClick={handleClickDelete}>
          Delete Record
        </button>

      </div>
    </div>
  );
};

export default ConsultancyView;
