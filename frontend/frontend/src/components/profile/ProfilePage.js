import React, { useState } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import "./ProfileCSS.css";

export default function Home() {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://chennai.vit.ac.in/wp-content/uploads/2021/06/Rajakumar_PhD_WithoutBackgroud-Rajakumar-Arul-51947-255x319.jpg"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>Rajkumar A</h4>
                    <p className="text-muted font-size-sm">
                      ORCID ID: 0000-0002-1385-7965
                    </p>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
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
                  <span className="text-secondary">https://bootdey.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <MDBIcon fab icon="linkedin" className="ICON-MDB" />
                    LinkedIn
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <MDBIcon fab icon="researchgate" className="ICON-MDB" />
                    Twitter
                  </h6>
                  <span className="text-secondary">@bootdey</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <MDBIcon fab icon="google" className="ICON-MDB" />G Scholar
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Rajkumar Arul</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Designation</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Assistant Professor
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">EID</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">51947</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    rajkumar.arul@vit.ac.in
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">School</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">SCOPE</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Join Date</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">June, 2021</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">DOB</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">January, 1995</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-12">
                    <a
                      className="btn btn-info "
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                    >
                      Edit
                    </a>
                    <a
                      className="btn btn-info "
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                    >
                      Change Password
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
