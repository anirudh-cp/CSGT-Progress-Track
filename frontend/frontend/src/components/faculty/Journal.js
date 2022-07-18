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
          <th scope="col">Title</th>
          <th scope="col">Position</th>
          <th scope="col">Journal</th>
          <th scope="col">Year</th>
          <th scope="col"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row">
            An optimal multitier resource allocation of cloud RAN in 5G using
            machine learning
          </th>
          <td>2</td>
          <td>Transactions on emerging telecommunications technologies</td>
          <td>Aug, 2019</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">
            An optimal multitier resource allocation of cloud RAN in 5G using
            machine learning
          </th>
          <td>2</td>
          <td>Transactions on emerging telecommunications technologies</td>
          <td>Aug, 2019</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">
            An optimal multitier resource allocation of cloud RAN in 5G using
            machine learning
          </th>
          <td>2</td>
          <td>Transactions on emerging telecommunications technologies</td>
          <td>Aug, 2019</td>
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
