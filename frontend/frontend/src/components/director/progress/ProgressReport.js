import React, { useState } from "react";
import { MDBRow } from "mdb-react-ui-kit";

import DatePickerTab from "./DatePickerTab"
import InputContainer from "./InputContainer";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";


export default function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { token } = useUserStore();
    var strftime = require('strftime');
    const [out, setOut] = useState(["Journal", "Conference", "Event", "Consultancy", "Book Chapter", "Book Editor", "Patents"]);

    const APIObject = new API();

    const handleClick = async () => {
        const response = await APIObject.getReport(token, 
            strftime("%Y-%m-%d", startDate), 
            strftime("%Y-%m-%d", endDate),
            out).catch(error => console.log(error));
    }

    return (
        <MDBRow className="d-flex justify-content-center pt-5 text-dark">
            <div className="text-center border-dark border">

                <DatePickerTab startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                <InputContainer data={["Journal", "Conference", "Event", "Consultancy", "Book Chapter", "Book Editor", "Patents"]}
                    setOut={setOut} />

                <button className="ripple ripple-surface ripple-surface-light btn btn-primary m-4" 
                style={{ width: "80%" }} onClick={handleClick}>
                    Download
                </button>
            </div>

        </MDBRow>
    );
}
