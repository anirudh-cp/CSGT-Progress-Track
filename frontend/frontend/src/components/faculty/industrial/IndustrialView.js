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
      </div>
    </div>
  );
};

export default PatentsView;
