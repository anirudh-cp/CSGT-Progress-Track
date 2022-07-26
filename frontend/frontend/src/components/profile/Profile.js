import { MDBIcon } from "mdb-react-ui-kit";
import './../../assets/profile.css'

import { useEffect } from "react";


export default function Home({ record }) {

  useEffect(() => {
    console.log(record);
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4">
          <div className="card card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src=''
                onError={(e) => {
                  e.target.src = './Images/user.png'
                }}
                className="rounded-circle"
                width={150}
              />
              <div className="mt-3">
                <h4> {record.Name} </h4>
                <p className="text-muted font-size-sm"> {record.Designation} </p>
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
                <span className="textField"> {record.Personal_page} </span>
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
                <span className="textField"> {record.Researchgate} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <MDBIcon fab icon="google" className="ICON-MDB" />G Scholar
                </h6>
                <span className="textField"> {record.Google_scholar_name} </span>
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
              <div className="col-sm-9 textField"> {record.Name} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Designation</h6>
              </div>
              <div className="col-sm-9 textField">
              {record.Designation}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">ORCID</h6>
              </div>
              <div className="col-sm-9 textField">
              {record.ORCID_ID}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-9 textField">
              {record.Gender}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">EID</h6>
              </div>
              <div className="col-sm-9 textField"> {record.Emp_ID} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">School</h6>
              </div>
              <div className="col-sm-9 textField"> {record.School} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Join Date</h6>
              </div>
              <div className="col-sm-9 textField"> {record.DOJ} </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">DOB</h6>
              </div>
              <div className="col-sm-9 textField"> {record.DOB} </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>

  );
}
