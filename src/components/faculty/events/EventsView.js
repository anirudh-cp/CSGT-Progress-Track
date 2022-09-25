import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const EventsView = ({ record }) => {

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
              <th scope="row"> Event </th>
              <td> {record.event} </td>
            </tr>
            <tr>
              <th scope="row"> Type </th>
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
              <th scope="row"> Number of participants </th>
              <td> {record.no_of_participants} </td>
            </tr>
            <tr>
              <th scope="row"> Registration Fee </th>
              <td> {record.reg_fee} </td>
            </tr>
            <tr>
              <th scope="row"> Collaboration Type </th>
              <td> {record.collaboration} </td>
            </tr>
            <tr>
              <th scope="row"> Sponsored </th>
              <td> {record.sponsored} </td>
            </tr>
            <tr>
              <th scope="row"> Amount Received from VIT </th>
              <td> {record.amount_from_vit} </td>
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

export default EventsView;
