import React, { useEffect, useState } from "react";

import useStore from '../../../API/store'
import API from '../../../API/APIService'
import EditorList from "./EditorList";
import Loading from "../../common/Loading";
import EmptyResults from "../../common/EmptyResults"


export default function Editor() {

    const APIObject = new API();
    const { token, filterStartDate, filterEndDate } = useStore();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    var strftime = require('strftime');

    const GetAPI = async () => {
        setLoad(true);
        console.log(strftime("%Y-%m-%d", filterStartDate), strftime("%Y-%m-%d", filterEndDate));
        const response = await APIObject.getPublicationsData(token, "book_editor", 
        strftime("%Y-%m-%d", filterStartDate), strftime("%Y-%m-%d", filterEndDate)).then(response => {
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
                (data.length===0)  ? <EmptyResults /> :<EditorList data={data} />
                ) 
            }
        </div>
    );
}
