import React, { Fragment } from 'react';
import { useState } from "react";
import Modal from './Modal';
import API from '../../API/APIService';
import useUserStore from '../../API/Stores/UserStore';
import useFilterStore from '../../API/Stores/FilterStore';
import Profile from './../profile/Profile'
import Loading from './Loading';
import ProgressReport from './../director/progress/ProgressReport'

import { useRef, useEffect } from "react"


export default function Dropdown({ name }) {

    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const refMenu = useRef(null)

    const APIObject = new API();
    const { token, empID, group } = useUserStore();
    const { facultyUpdateKey } = useFilterStore();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const [showProg, setShowProg] = useState(false);

    const outer = showMenu ? "dropdown-content d-block" : "dropdown-content d-none";

    useEffect(() => {
        GetAPI();
    }, [facultyUpdateKey])

    const GetAPI = async () => {
        setLoad(true);
        const response = await APIObject.getFacultyData(token, empID).then(response => {
            setData(response);
        }).catch(error => console.log(error));
        setLoad(false);
    }

    const handleClick = () => {
        GetAPI();
        setShow(!show);
    }

    const closeOpenMenus = (e) => {
        if (refMenu.current && showMenu && !refMenu.current.contains(e.target)) {
            setShowMenu(false)
        }
    }

    const handleLogout = () => {
        window.location.href = '/'
    }

    document.addEventListener('mousedown', closeOpenMenus)

    return (
        <div className="dropdown" ref={refMenu}>
            <button color="light" size="md"
                className=" dropButton ripple ripple-surface ripple-surface-dark btn btn-outline-light 
                p-2 btn-md dropdown-toggle" style={{ fontSize: "13px", minWidth: "5vw" }}
                onClick={() => { setShowMenu(!showMenu); }}>
                {name}
            </button>
            <div className={outer} >

                <Modal handleClick={() => { setShowProg(!showProg) }} show={showProg}
                    childElement={<ProgressReport employees={[data.emp_id]} names={data.name} asFaculty={true} />}>
                </Modal>

                <Modal handleClick={handleClick} show={show}
                    childElement={load ? <Loading /> : <Profile record={data} />}></Modal>
                {group === 'faculty' &&

                    <Fragment>
                        <button className='dropdown-buttons' onClick={handleClick}>Account</button>

                        <button className='dropdown-buttons'
                            onClick={() => {
                                setShowProg(!showProg)
                            }}>
                            Generate Progress Report
                        </button>
                    </Fragment>
                }
                <button className='dropdown-buttons' onClick={handleLogout}
                    style={{ borderBottom: "1px solid black" }}>
                    Logout
                </button>
            </div>
        </div>
    );
}