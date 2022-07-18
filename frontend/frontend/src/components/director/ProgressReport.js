import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import DatePicker from "react-date-picker/dist/entry.nostyle";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import {
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center pt-5 ">
        <MDBCol size="col-md-3"></MDBCol>
        {/* FORM COLUMN */}
        <MDBCol size="col-md-6">
          <form className="text-center border-dark border pl-5 pt-3 pr-5">
            <MDBRow className="d-flex justify-content-center pt-3 pb-3 ">
              <MDBCol size="col-md-3">
                <span className="pr-3 text-dark">Start Date:</span>
                <DatePicker
                  onChange={onChange1}
                  value={value1}
                  className="pb-2 pt-2"
                />
              </MDBCol>
              <MDBCol size="col-md-3 pl-2">
                <span className="pr-3 pl-1 text-dark">End Date:</span>
                <DatePicker
                  onChange={onChange2}
                  value={value2}
                  className="pb-2 pt-2"
                />
              </MDBCol>
              <MDBCol size="col-md-3"></MDBCol>
              <MDBCol size="col-md-3"></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="p-2">
                <MDBCheckbox
                  id="form2Example3"
                  label="Journal"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol className="p-2">
                <MDBCheckbox
                  id="form2Example3"
                  label="Conference"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol className="p-2">
                <MDBCheckbox id="form2Example3" label="Event" defaultChecked />
              </MDBCol>
              <MDBCol className="p-2">
                <MDBCheckbox
                  id="form2Example3"
                  label="Consultancy"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol className="p-2">
                <MDBCheckbox
                  id="form2Example3"
                  label="Chapter"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol className="p-2">
                <MDBCheckbox id="form2Example3" label="Editor" defaultChecked />
              </MDBCol>
              <MDBCol className="p-2">
                <MDBCheckbox id="form2Example3" label="Patent" defaultChecked />
              </MDBCol>
            </MDBRow>
            <MDBBtn type="submit" className="mb-4 mt-4" block>
              Download
            </MDBBtn>
          </form>
        </MDBCol>
        {/* FORM COLUMN */}
        <MDBCol size="col-md-3"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
