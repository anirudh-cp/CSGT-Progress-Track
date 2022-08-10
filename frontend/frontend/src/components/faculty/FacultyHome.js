import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";

import All from "./all/All";
import Journal from "./journal/Journal";
import Conference from "./conference/Conference";
import Event from "./events/Event";
import Consultancy from "./consultancy/Consultancy";
import Book from "./book/Book";
import Patent from "./patents/Patents";
import Project from "./projects/Projects"
import Industrial from "./industrial/Industrial"

import Filter from "./Filter";

import useUserStore from "../../API/Stores/UserStore";
import { useNavigate } from 'react-router-dom';  

import "../../assets/faculty.css";


export default function FacultyHome() {

    const [key, setKey] = useState(new Date());
    const [tabIndex, setTabIndex] = useState(0);
    const { group, token } = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        // if(group !== "faculty" || token === '')
        //    navigate('/');
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

                <Filter setKey={setKey} tabIndex={tabIndex} />

                {/* <TabPanel>
                    <All />
                </TabPanel>
                 */}
                <TabPanel>
                    <Journal key={key} />
                </TabPanel>
                <TabPanel>
                    <Conference key={key} />
                </TabPanel>
                <TabPanel>
                    <Event key={key}/>
                </TabPanel>
                <TabPanel>
                    <Consultancy key={key}/>
                </TabPanel>
                <TabPanel>
                    <Book key={key}/>
                </TabPanel>
                <TabPanel>
                    <Patent key={key} />
                </TabPanel>
                <TabPanel>
                    <Project key={key} />
                </TabPanel>
                <TabPanel>
                    <Industrial key={key} />
                </TabPanel>
                  
            </Tabs>
        </div>
    );
}
