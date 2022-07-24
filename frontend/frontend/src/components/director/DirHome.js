import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ProgressReport from "./progress/ProgressReport";
import Faculty from "./faculty/Faculty";

import "./../../assets/director.css"

export default function App() {
  return (
    <div className="">
      <Tabs className="Tabs" style={{color:"black"}}>
        <TabList>
          <Tab>Progress Report</Tab>
          <Tab>Faculty</Tab>
        </TabList>

        <TabPanel>
          <ProgressReport />
        </TabPanel>
        
        <TabPanel>
          <Faculty />
        </TabPanel>
      </Tabs>
    </div>
  );
}
