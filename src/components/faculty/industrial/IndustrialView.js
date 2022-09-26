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
              <th scope="row"> Description </th>
              <td> {record.description} </td>
            </tr>
            <tr>
              <th scope="row"> Date </th>
              <td> {record.date} </td>
            </tr>
            <tr>
              <th scope="row"> MOU Signed Status </th>
              <td> {record.mou_signed} </td>
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
