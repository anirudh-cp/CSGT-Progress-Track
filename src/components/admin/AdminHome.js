import AddFaculty from './../UserMod/AddFaculty'
import AddUser from './../UserMod/AddUser'
import DeleteUser from './../UserMod/DeleteUser'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Permission from "./Permission";

import React, { useEffect } from "react";
import useUserStore from "../../API/Stores/UserStore";
import { useNavigate } from 'react-router-dom';

import '../../assets/admin.css'


export default function AdminHome() {

    const { group, token } = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (group !== 'admin' || token === '')
            navigate('/');
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
