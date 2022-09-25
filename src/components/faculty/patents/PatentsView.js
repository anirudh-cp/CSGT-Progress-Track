import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const PatentsView = ({ record }) => {

  const handleClickDelete = () => {
    let choice = window.confirm("Delete record? This action is unreversible");
    if(choice === true) {
      alert("Record is deleted, apply filter to view changes.")
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
              <td> {record.title} </td>
            </tr>
            <tr>
              <th scope="row"> Type of Consultancy </th>
              <td> {record.type} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Creation </th>
              <td> {record.filed_date} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Creation </th>
              <td> {record.published_date} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Creation </th>
              <td> {record.granted_date} </td>
            </tr>
            <tr>
              <th scope="row"> Number of Authors </th>
              <td> {record.no_of_authors} </td>
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

export default PatentsView;
