import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

const FacultyView = ({ record }) => {
  return (
    <div style={{ height: "60vh" }}>
      <h2>Additional Information</h2>

      <div className="wrapper">
        <MDBTable striped>
          <MDBTableBody>
            <tr>
              <th scope="row"> Name </th>
              <td> {record.name} </td>
            </tr>
            <tr>
              <th scope="row"> Emp ID </th>
              <td> {record.emp_id} </td>
            </tr>
            <tr>
              <th scope="row"> Designation </th>
              <td> {record.designation} </td>
            </tr>
            <tr>
              <th scope="row"> School </th>
              <td> {record.school} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Joining </th>
              <td> {record.date_of_join} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Birth </th>
              <td> {record.date_of_birth} </td>
            </tr>
            <tr>
              <th scope="row"> Gender </th>
              <td> {record.gender} </td>
            </tr>
            <tr>
              <th scope="row"> ORCID </th>
              <td> {record.orcid} </td>
            </tr>
            <tr>
              <th scope="row"> Research Gate </th>
              <td> {record.research_gate} </td>
            </tr>
            <tr>
              <th scope="row"> LinkedIn </th>
              <td> {record.linkedin} </td>
            </tr>
            <tr>
              <th scope="row"> Google Scholar </th>
              <td> {record.google_scholar} </td>
            </tr>
            <tr>
              <th scope="row"> Personal Page </th>
              <td> {record.personal_page} </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
};

export default FacultyView;
