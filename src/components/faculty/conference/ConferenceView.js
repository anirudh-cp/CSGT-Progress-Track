import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const ConferenceView = ({ record }) => {

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
              <td> {record.article_title} </td>
            </tr>
            <tr>
              <th scope="row"> Conference </th>
              <td> {record.conference_name} </td>
            </tr>
            <tr>
              <th scope="row"> Conference location </th>
              <td> {record.place} </td>
            </tr>
            <tr>
              <th scope="row"> Type of conference </th>
              <td> {record.type} </td>
            </tr>
            <tr>
              <th scope="row"> Number of Authors </th>
              <td> {record.no_of_authors} </td>
            </tr>
            <tr>
              <th scope="row"> Involvement </th>
              <td> {record.conducting} </td>
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
              <th scope="row"> DOI </th>
              <td> {record.digital_obj_id} </td>
            </tr>
            <tr>
              <th scope="row"> Indexed in SCOPUS? </th>
              <td> {record.indexing} </td>
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

export default ConferenceView;
