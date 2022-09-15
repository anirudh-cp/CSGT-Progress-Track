import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const BookView = ({ record }) => {
  return (
    <div style={{ height: "60vh" }}>
      <h2>Additional Information</h2>

      <div className="wrapper">
        <MDBTable striped>
          <MDBTableBody>
            <tr>
              <th scope="row"> Type </th>
              <td> {record.type} </td>
            </tr>

            <tr>
              <th scope="row"> Chapter title </th>
              <td> {record.chapter_title} </td>
            </tr>
            <tr>
              <th scope="row"> Book title </th>
              <td> {record.book_title} </td>
            </tr>
            <tr>
              <th scope="row"> Number of Authors </th>
              <td> {record.no_of_authors} </td>
            </tr>
            <tr>
              <th scope="row"> ISSN ISBN Number </th>
              <td> {record.isbn} </td>
            </tr>
            <tr>
              <th scope="row"> Type of Publication </th>
              <td> {record.type_of_publication} </td>
            </tr>
            <tr>
              <th scope="row"> Publisher Name </th>
              <td> {record.publisher_name} </td>
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
      </div>
    </div>
  );
};

export default BookView;
