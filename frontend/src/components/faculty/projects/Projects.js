import React, { useEffect, useState } from "react";

import useData from "../../../utils/Data";
import ProjectsList from "./ProjectsList";
import Loading from "../../common/Loading";
import EmptyResults from "../../common/EmptyResults"

import useIdentStore from "./../../../storages/IdentStore";
import useFilterStore from "./../../../storages/FilterStore";


export default function Projects() {

    const { getData } = useData();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const { filterStartDate, filterEndDate } = useFilterStore();
    const { getEmpID } = useIdentStore();
    var strftime = require('strftime');

    const GetAPI = async () => {
        setLoad(true);
        let empID = await getEmpID();

        console.log(strftime("%Y-%m-%d", filterStartDate), strftime("%Y-%m-%d", filterEndDate));
        
        const response = await getData(empID, "project",
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
                (data.length===0)  ? <EmptyResults /> :<ProjectsList data={data} />
                ) 
            }
        </div>
    );
}
