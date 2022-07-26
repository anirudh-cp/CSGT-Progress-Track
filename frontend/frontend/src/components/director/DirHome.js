import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ProgressReport from "./progress/ProgressReport";
import Faculty from "./faculty/Faculty";

import useUserStore from "../../API/Stores/UserStore";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import "./../../assets/director.css"

export default function App() {

  const { group, token } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
      if(group !== 'director' && token === '')
          navigate('/');
  }, [])
  
  
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
