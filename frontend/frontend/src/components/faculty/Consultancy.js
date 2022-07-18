import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function FacultyHomeAll() {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope="col">Company</th>
          <th scope="col">Type</th>
          <th scope="col">Date</th>
          <th scope="col">Duration</th>
          <th scope="col"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr className="">
          <th scope="row">Redfowl Infotech</th>
          <td>Technical</td>
          <td>May, 2020</td>
          <td>2 yrs</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
        <tr className="">
          <th scope="row">Redfowl Infotech</th>
          <td>Technical</td>
          <td>May, 2020</td>
          <td>2 yrs</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
        <tr className="">
          <th scope="row">Redfowl Infotech</th>
          <td>Technical</td>
          <td>May, 2020</td>
          <td>2 yrs</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}
