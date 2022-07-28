import Addition from "./Addition";
import Deletion from "./Deletion";
import Permission from "./Permission";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import React, { useEffect } from "react";
import useUserStore from "../../API/Stores/UserStore";
import { useNavigate } from 'react-router-dom';  

import "./AdminCSS.css";


export default function AdminHome() {

  const { group, token } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(group !== 'admin' || token === '')
        navigate('/');
}, [])

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
