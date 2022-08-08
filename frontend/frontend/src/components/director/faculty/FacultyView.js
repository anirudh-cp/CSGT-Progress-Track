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
              <td> {record.Name} </td>
            </tr>
            <tr>
              <th scope="row"> Emp ID </th>
              <td> {record.emp_id} </td>
            </tr>
            <tr>
              <th scope="row"> Designation </th>
              <td> {record.Designation} </td>
            </tr>
            <tr>
              <th scope="row"> School </th>
              <td> {record.School} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Joining </th>
              <td> {record.DOJ} </td>
            </tr>
            <tr>
              <th scope="row"> Date of Birth </th>
              <td> {record.DOB} </td>
            </tr>
            <tr>
              <th scope="row"> Gender </th>
              <td> {record.Gender} </td>
            </tr>
            <tr>
              <th scope="row"> ORCID </th>
              <td> {record.ORCID_ID} </td>
            </tr>
            <tr>
              <th scope="row"> Research Gate </th>
              <td> {record.Researchgate} </td>
            </tr>
            <tr>
              <th scope="row"> LinkedIn </th>
              <td> {record.linkedin} </td>
            </tr>
            <tr>
              <th scope="row"> Google Scholar </th>
              <td> {record.Google_scholar_name} </td>
            </tr>
            <tr>
              <th scope="row"> Personal Page </th>
              <td> {record.Personal_page} </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
};

export default FacultyView;
