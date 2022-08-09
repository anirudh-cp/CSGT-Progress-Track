import { MDBIcon } from "mdb-react-ui-kit";
import "./../../assets/profile.css";

import { useEffect } from "react";

export default function Profile({ record }) {
  useEffect(() => {
    console.log(record);

    return () => {};
  }, []);

  return (
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4">
          <div className="card card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src=""
                onError={(e) => {
                  e.target.src = "./Images/user.png";
                }}
                className="rounded-circle"
                width={150}
              />
              <div className="mt-3">
                <h4> {record.name} </h4>
                <p className="text-muted font-size-sm">
                  {" "}
                  {record.designation}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <MDBIcon fas icon="globe" className="ICON-MDB" />
                  Website
                </h6>
                <span className="textField"> {record.personal_page} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <MDBIcon fab icon="linkedin" className="ICON-MDB" />
                  LinkedIn
                </h6>
                <span className="textField"> {record.linkedin} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <MDBIcon fab icon="researchgate" className="ICON-MDB" />
                  Research Gate
                </h6>
                <span className="textField"> {record.research_gate} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <MDBIcon fab icon="google" className="ICON-MDB" />G Scholar
                </h6>
                <span className="textField"> {record.google_scholar} </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card card-body" style={{ height: "100%" }}>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 textField"> {record.name} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Designation</h6>
              </div>
              <div className="col-sm-9 textField">{record.designation}</div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">ORCID</h6>
              </div>
              <div className="col-sm-9 textField">{record.orcid}</div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-9 textField">{record.gender}</div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">EID</h6>
              </div>
              <div className="col-sm-9 textField"> {record.emp_id} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">School</h6>
              </div>
              <div className="col-sm-9 textField"> {record.school} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Join Date</h6>
              </div>
              <div className="col-sm-9 textField"> {record.date_of_join} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">DOB</h6>
              </div>
              <div className="col-sm-9 textField"> {record.date_of_birth} </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
