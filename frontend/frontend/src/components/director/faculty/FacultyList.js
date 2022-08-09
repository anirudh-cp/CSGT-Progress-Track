import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
} from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import Profile from "./../../profile/Profile";

const FacultyList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentRecord, setCurrentRecord] = useState([]);

  const handleClick = (obj) => {
    setCurrentRecord(obj);
    setShow(!show);
  };

  return (
    <div key="faculty-key">
      <div className="pt-2 pb-5">
        <MDBTypography listInLine className="mb-0">
          <li className="list-inline-item">JR-Journal |</li>
          <li className="list-inline-item">CF-Conference |</li>
          <li className="list-inline-item">CF-Conference |</li>
          <li className="list-inline-item"> EV-Event |</li>
          <li className="list-inline-item"> CN-Consultancy |</li>
          <li className="list-inline-item">BC-Book Chapter |</li>
          <li className="list-inline-item"> BE-Book Editor |</li>
          <li className="list-inline-item">PA-Patent |</li>
        </MDBTypography>
      </div>

      <MDBTable striped key="faculty-table-key">
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Name</th>
            <th scope="col">Emp ID</th>
            <th scope="col">Designation</th>
            <th scope="col">School</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <th scope="row"> {obj.Name} </th>
                <th> {obj.emp_id} </th>
                <th> {obj.designation} </th>
                <th> {obj.school} </th>
                <td>
                  <div className="d-grid gap-2 flex justify-content-md-end">
                    <Modal
                      handleClick={handleClick}
                      show={show}
                      childElement={<Profile record={currentRecord} />}
                    ></Modal>
                    <button
                      className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                      size="sm"
                      color="dark"
                      onClick={() => {
                        handleClick(obj);
                      }}
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default FacultyList;
