import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import API from "../../../API/APIService";
import { useState } from "react";
import useUserStore from "../../../API/Stores/UserStore";
import useFilterStore from "../../../API/Stores/FilterStore";


const JournalView = ({ record }) => {
  
  const APIObject = new API();
  const { token } = useUserStore();
  const { setUpdateKey } = useFilterStore(); 
  const [load, setLoad] = useState(true);
    
  const handleClickDelete = async () => {
    let choice = window.confirm("Delete record? This action is unreversible");
    if(choice === true) {
      setLoad(true);
      const response = await APIObject.DeleteData(token, record.id, "journal");
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
              <th scope="row"> Title </th>
              <td> {record.article_title} </td>
            </tr>
            <tr>
              <th scope="row"> Journal </th>
              <td> {record.journal_name} </td>
            </tr>
            <tr>
              <th scope="row"> Number of Authors </th>
              <td> {record.no_of_authors} </td>
            </tr>
            <tr>
              <th scope="row"> Collaboration </th>
              <td> {record.collaboration} </td>
            </tr>
            <tr>
              <th scope="row"> Impact Factor </th>
              <td> {record.impact_factor} </td>
            </tr>
            <tr>
              <th scope="row"> Volume Number </th>
              <td> {record.volume_no} </td>
            </tr>
            <tr>
              <th scope="row"> Issue Number </th>
              <td> {record.issue_no} </td>
            </tr>
            <tr>
              <th scope="row"> Indexing </th>
              <td> {record.indexing} </td>
            </tr>
            <tr>
              <th scope="row"> Year </th>
              <td> {record.year} </td>
            </tr>
            <tr>
              <th scope="row"> DOI </th>
              <td> {record.digital_obj_id} </td>
            </tr>
            <tr>
              <th scope="row"> Funder Name </th>
              <td> {record.funder_name} </td>
            </tr>
            <tr>
              <th scope="row"> Amount of Publication </th>
              <td> {record.amount_of_publication} </td>
            </tr>
            <tr>
              <th scope="row"> Support received status </th>
              <td> {record.support} </td>
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

export default JournalView;
