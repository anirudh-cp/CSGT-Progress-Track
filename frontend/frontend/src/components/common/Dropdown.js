import React from 'react';
import { useState } from "react";
import Modal from './Modal';
import API from '../../API/APIService';
import useUserStore from '../../API/Stores/UserStore';
import Profile from './../profile/Profile'
import Loading from './Loading';

import {useRef} from "react"


export default function Dropdown() {

    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const refMenu = useRef(null)
    
    const APIObject = new API();
    const { token, empID } = useUserStore();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const outer = showMenu ? "dropdown-content d-block" : "dropdown-content d-none";


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

    const closeOpenMenus = (e)=>{
        if(refMenu.current && showMenu && !refMenu.current.contains(e.target)){
          setShowMenu(false)
        }
    }

    const handleLogout = () => {
        window.location.href='/'
    }

    document.addEventListener('mousedown', closeOpenMenus)

    return (
        <div className="dropdown" ref={refMenu}>
            <button color="light" size="md"
                className=" dropButton ripple ripple-surface ripple-surface-dark btn btn-outline-light btn-md dropdown-toggle"
                onClick={ () => { setShowMenu(!showMenu); }}>
                Profile
            </button>
            <div className={outer} >

                <Modal handleClick={handleClick} show={show}
                    childElement={load? <Loading />: <Profile record={data} />}></Modal>
                <button className='dropdown-buttons' onClick={ handleClick }>Account</button>
                
                <button className='dropdown-buttons' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}