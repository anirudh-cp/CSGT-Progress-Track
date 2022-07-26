import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Addition from "./Addition";
import Deletion from "./Deletion";
import Permission from "./Permission";

import DatePicker from "react-date-picker/dist/entry.nostyle";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function AdminHome() {
  return (
    <div className="">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Addition</Tab>
          <Tab>Deletion</Tab>
          <Tab>Permission</Tab>
        </TabList>
        <TabPanel>
          <Addition />
        </TabPanel>
        <TabPanel>
          <Deletion />
        </TabPanel>
        <TabPanel>
          <Permission />
        </TabPanel>
      </Tabs>
    </div>
  );
}
