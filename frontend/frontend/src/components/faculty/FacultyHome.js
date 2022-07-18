import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import DatePicker from "react-date-picker/dist/entry.nostyle";

import "./FacultyCSS.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import All from "./All";
import Journal from "./Journal";
import Conference from "./Conference";
import Event from "./Event";
import Consultancy from "./Consultancy";
import Chapter from "./Chapter";
import Editor from "./Editor";
import Patent from "./Patent";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";


import useStore from '../../API/store'

export default function FacultyHome() {

  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());
  
  return (
    <div className="">
      <Tabs className="Tabs">
        <TabList>
          <Tab>All</Tab>
          <Tab>Journal</Tab>
          <Tab>Conference</Tab>
          <Tab>Event</Tab>
          <Tab>Consultancy</Tab>
          <Tab>Chapter</Tab>
          <Tab>Editor</Tab>
          <Tab>Patent</Tab>
        </TabList>
        <div className="d-flex justify-content-center pt-3 pb-4">
          <div>
            <span className="pr-3 text-dark">Start Date:</span>
            <DatePicker
              onChange={onChange1}
              value={value1}
              className="pb-2 pt-2"
            />
          </div>
          <div>
            <span className="pr-3 pl-3 text-dark">End Date:</span>
            <DatePicker
              onChange={onChange2}
              value={value2}
              className="pb-2 pt-2"
            />
            <span className="pl-2">
              <MDBBtn className="mx-2" size="sm" color="dark">
                Filter
              </MDBBtn>
            </span>
          </div>
        </div>

        <TabPanel>
          <All />
        </TabPanel>
        <TabPanel>
          <Journal />
        </TabPanel>
        <TabPanel>
          <Conference />
        </TabPanel>
        <TabPanel>
          <Event />
        </TabPanel>
        <TabPanel>
          <Consultancy />
        </TabPanel>
        <TabPanel>
          <Chapter />
        </TabPanel>
        <TabPanel>
          <Editor />
        </TabPanel>
        <TabPanel>
          <Patent />
        </TabPanel>
      </Tabs>
    </div>
  );
}
