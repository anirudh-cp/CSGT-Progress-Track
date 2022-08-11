import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ProgressReport from "./progress/ProgressReport";
import Faculty from "./faculty/Faculty";

import useUserStore from "../../API/Stores/UserStore";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import AddFaculty from './../UserMod/AddFaculty'
import AddUser from './../UserMod/AddUser'
import DeleteUser from './../UserMod/DeleteUser'

import "./../../assets/director.css"

export default function App() {

  const { group, token } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (group !== 'director' || token === '')
      navigate('/');
  }, [])


  return (
    <div className="">
      <Tabs className="Tabs" style={{ color: "black" }}>
        <TabList>
          <Tab>Add Faculty</Tab>
          <Tab>Add User</Tab>
          <Tab>Delete User</Tab>
          <Tab>Progress Report</Tab>
          <Tab>Faculty</Tab>
        </TabList>

        <TabPanel>
          <AddFaculty />
        </TabPanel>
        <TabPanel>
          <AddUser />
        </TabPanel>
        <TabPanel>
          <DeleteUser />
        </TabPanel>
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
