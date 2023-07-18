import React, { useState } from "react";
import { MDBRow } from "mdb-react-ui-kit";

import DatePickerTab from "./DatePickerTab"
import InputContainer from "./InputContainer";
import API from "../../../utils/Report";
import useIdentStore from "./../../../storages/IdentStore";


export default function App({ employees, names, asFaculty=false }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    var strftime = require('strftime');
    const [out, setOut] = useState(["Journal", "Conference", "Event", "Consultancy", "Books", "Patents", "Projects", "Industrial Interactions"]);

    const APIObject = new API();

    const handleClick = async () => {
        
        console.log(employees);

        let methodType = "get";
        let bodyData = [];
        if (employees !== undefined) {
            methodType = "post"
            bodyData = employees;
        }
        const response = await APIObject.getReport( 
            strftime("%Y-%m-%d", startDate), 
            strftime("%Y-%m-%d", endDate),
            out, methodType, bodyData, asFaculty).catch(error => console.log(error));
    }

    return (
        <div className="row d-flex justify-content-center text-dark">
            <div className="text-center border-dark border">
                
                {employees? <p className="reportText">The employees for whom the report is to be generated for are/is: {names}</p>: <></>}

                <DatePickerTab startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                <InputContainer data={["Journal", "Conference", "Event", "Consultancy", "Books", "Patents", "Projects", "Industrial Interactions"]}
                    setOut={setOut} />

                <button className="ripple ripple-surface ripple-surface-light btn btn-primary m-4" 
                style={{ width: "80%" }} onClick={handleClick}>
                    Download
                </button>
            </div>

        </div>
    );
}
