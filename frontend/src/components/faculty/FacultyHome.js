import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";

import All from "./all/All";
import Journal from "./journal/Journal";
import Conference from "./conference/Conference";
import Events from "./events/Events";
import Consultancy from "./consultancy/Consultancy";
import Book from "./book/Book";
import Patent from "./patents/Patents";
import Project from "./projects/Projects"
import Industrial from "./industrial/Industrial"

import Filter from "./Filter";

import useIdentStore from "../../storages/IdentStore";
import useFilterStore from "../../storages/FilterStore";
import { useNavigate } from 'react-router-dom';  

import "../../assets/faculty.css";


export default function FacultyHome() {

    const { setUpdateKey, updateKey } = useFilterStore();
    const [tabIndex, setTabIndex] = useState(0);
    const { getGroup, setHideUserOptions } = useIdentStore();

    const navigate = useNavigate();


    const fetchData = async () => {
        let group = await getGroup();
        if(group !== "faculty") {
            navigate('/')
        }
    }

    useEffect(() => {
        fetchData()
        setHideUserOptions(false)
    }, [])
    
    
    return (
        <div className="">
            <Tabs className="Tabs" style={{color:"black"}} onSelect={(index) => {setTabIndex(index)}}>
                <TabList>
                    {/* <Tab>All</Tab> */}
                    <Tab>Journal</Tab>
                    <Tab>Conference</Tab>
                    <Tab>Event</Tab>
                    <Tab>Consultancy</Tab>
                    <Tab>Books</Tab>
                    <Tab>Patent</Tab>
                    <Tab>Project</Tab>
                    <Tab>Industrial</Tab>
                </TabList>

                <Filter setKey={setUpdateKey} tabIndex={tabIndex} />

                {/* <TabPanel>
                    <All />
                </TabPanel>
                 */}
                <TabPanel>
                    <Journal key={updateKey} />
                </TabPanel>
                <TabPanel>
                    <Conference key={updateKey} />
                </TabPanel>
                <TabPanel>
                    <Events key={updateKey}/>
                </TabPanel>
                <TabPanel>
                    <Consultancy key={updateKey}/>
                </TabPanel>
                <TabPanel>
                    <Book key={updateKey}/>
                </TabPanel>
                <TabPanel>
                    <Patent key={updateKey} />
                </TabPanel>
                <TabPanel>
                    <Project key={updateKey} />
                </TabPanel>
                <TabPanel>
                    <Industrial key={updateKey} />
                </TabPanel>
                  
            </Tabs>
        </div>
    );
}
