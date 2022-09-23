import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const JournalView = ({ record }) => {

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
