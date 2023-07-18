import AddFaculty from './../UserMod/AddFaculty'
import AddUser from './../UserMod/AddUser'
import DeleteUser from './../UserMod/DeleteUser'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Permission from "./Permission";

import React, { useEffect } from "react";
import useIdentStore from "./../../storages/IdentStore"
import { useNavigate } from 'react-router-dom';

import '../../assets/admin.css'


export default function AdminHome() {

    const { getGroup, setHideUserOptions } = useIdentStore();
    const navigate = useNavigate();

    const fetchData = async () => {
        let group = await getGroup();
        if(group !== "admin") {
            navigate("/");
        }
    }

    useEffect(() => {
        fetchData();
        setHideUserOptions(false);
    }, [])

    return (
        <div className="">
            <Tabs className="Tabs">
                <TabList>
                    <Tab>Add Faculty</Tab>
                    <Tab>Add User</Tab>
                    <Tab>Delete User</Tab>
                    <Tab>Permissions</Tab>
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
                    <Permission />
                </TabPanel>
            </Tabs>
        </div>
    );
}
