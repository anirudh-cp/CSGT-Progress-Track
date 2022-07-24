import React, { useEffect, useState } from "react";

import useStore from '../../../API/store'
import API from '../../../API/APIService'
import FacultyList from "./FacultyList";
import Loading from "../../common/Loading";
import EmptyResults from "../../common/EmptyResults"


export default function Faculty() {

    const APIObject = new API();
    const { token } = useStore();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    var strftime = require('strftime');

    const GetAPI = async () => {
        setLoad(true);
        const response = await APIObject.getAllFacultyData(token).then(response => {
            setData(response);
        }).catch(error => console.log(error));
        setLoad(false);
    }

    useEffect(() => {
        GetAPI();
    }, [])


    return (
        <div>
            {load? <Loading />: ( 
                (data.length===0)  ? <EmptyResults /> :<FacultyList data={data} />
                ) 
            }
        </div>
    );
}
