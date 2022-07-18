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
          <th scope="col">Chapter</th>
          <th scope="col">Position</th>
          <th scope="col">Book</th>
          <th scope="col">Indexing</th>
          <th scope="col">Publisher</th>
          <th scope="col">Date</th>
          <th scope="col"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr className="">
          <th scope="row">
            A novel privacy preservation scheme for internet of things using
            blockchain strategy
          </th>
          <td>2</td>
          <td>
            International Conference on Communication, Computing and Electronics
            Systems
          </td>
          <td>scopus</td>
          <td>Springer</td>
          <td>Oct, 2020</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
        <tr className="">
          <th scope="row">
            A novel privacy preservation scheme for internet of things using
            blockchain strategy
          </th>
          <td>2</td>
          <td>
            International Conference on Communication, Computing and Electronics
            Systems
          </td>
          <td>scopus</td>
          <td>Springer</td>
          <td>Oct, 2020</td>
          <td>
            <div className="d-grid gap-2 flex justify-content-md-end">
              <MDBBtn className="mx-2" size="sm" color="dark">
                View
              </MDBBtn>
            </div>
          </td>
        </tr>
        <tr className="">
          <th scope="row">
            A novel privacy preservation scheme for internet of things using
            blockchain strategy
          </th>
          <td>2</td>
          <td>
            International Conference on Communication, Computing and Electronics
            Systems
          </td>
          <td>scopus</td>
          <td>Springer</td>
          <td>Oct, 2020</td>
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
