import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const PatentsView = ({ record }) => {
  return (
    <div style={{ height: "60vh" }}>
      <h2>Additional Information</h2>

      <div className="wrapper">
        <MDBTable striped>
          <MDBTableBody>
            <tr>
              <th scope="row"> Title </th>
              <td> {record.patent_title} </td>
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
      </div>
    </div>
  );
};

export default PatentsView;
