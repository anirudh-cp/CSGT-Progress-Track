import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import {
  MDBTypography,
} from "mdb-react-ui-kit";

import ProgressReport from "./progress/ProgressReport";
import Faculty from "./Faculty";

import "./../../assets/director.css"

export default function App() {
  return (
    <div className="">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Progress Report</Tab>
          <Tab>Faculty</Tab>
        </TabList>

        <TabPanel>
          <ProgressReport />
        </TabPanel>
        <TabPanel>
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
          <Faculty />
        </TabPanel>
      </Tabs>
    </div>
  );
}
