import React, { useEffect, useState } from "react";
import FacultyList from "./FacultyList";
import Loading from "../../common/Loading";
import EmptyResults from "../../common/EmptyResults"
import useFaculty from "../../../utils/Faculty";


export default function Faculty() {

    const { getAllFacultyData } = useFaculty()
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const GetAPI = async () => {
        setLoad(true);
        const response = await getAllFacultyData().then(response => {
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
