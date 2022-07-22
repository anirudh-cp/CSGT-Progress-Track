import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";

import All from "./All";
import Journal from "./journal/Journal";
import Conference from "./conference/Conference";
import Event from "./Event";
import Consultancy from "./Consultancy";
import Chapter from "./Chapter";
import Editor from "./Editor";
import Patent from "./Patent";
import Filter from "./Filter";

import "../../assets/faculty.css";


export default function FacultyHome() {

    const [key, setKey] = useState(new Date);

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

                <Filter setKey={setKey}/>

                <TabPanel>
                    <All />
                </TabPanel>
                <TabPanel>
                    <Journal key={key}/>
                </TabPanel>
                <TabPanel>
                    <Conference key={key} />
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
