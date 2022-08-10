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
              <td> {record.title} </td>
            </tr>
            <tr>
              <th scope="row"> Start Date </th>
              <td> {record.start_date} </td>
            </tr>
            <tr>
              <th scope="row"> Role </th>
              <td> {record.role} </td>
            </tr>
            <tr>
              <th scope="row"> Funding Agency </th>
              <td> {record.funding_agency} </td>
            </tr>
            <tr>
              <th scope="row"> Amount Registered </th>
              <td> {record.amount_registered} </td>
            </tr>
            <tr>
              <th scope="row"> Amount Sanctioned </th>
              <td> {record.amount_sanctioned} </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
};

export default PatentsView;
