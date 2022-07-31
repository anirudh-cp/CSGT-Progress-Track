import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import React, { useState } from "react";


const ConsultancyAdd = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            Amount: 0,
            invoice_number: 0,
            Funding:"No"
        }
    });

    const { token, empID } = useUserStore();
    const api = new API()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    var strftime = require('strftime');

    const onSubmit = async (data) => {        
        console.log(data)
        data.consultancy_startdate = strftime("%Y-%m-%d", startDate)
        data.consultancy_enddate = strftime("%Y-%m-%d", endDate)
        const response = await api.AddConsultancy(token, empID, data);
        alert(response);
    }

    return (
        <div className="d-flex justify-content-center top-container" style={{ height: "80vh" }}>
            <form className="form justify-content-center wrapper" style={{ height: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                <div className="title">Add or Update Consultancy</div>

                <div className="input-container ic1 dropdown">
                    <select id="type" className="input dropdown" type="text" {...register("type_of_consultancy")}>
                        <option value="national" disabled defaultValue="national">
                            Type of Consultancy
                        </option>
                        <option value="Product development">Product development</option>
                        <option value="Research Collaboration">Research Collaboration</option>
                    </select>
                </div>

                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}


                <div className="input-container ic1">
                    <input
                        id="cname"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("company_name")}
                    />
                    <div className="cut" />
                    <label htmlFor="cname" className="placeholder">
                        Company name
                    </label>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Funding")}>
                        <option value="" disabled defaultValue="No">
                            Funding status
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                
                <div className="input-container ic1">
                    <input id="amt" className="input" type="number" placeholder=" " {...register("Amount")}/>
                    <div className="cut" />
                    <label htmlFor="amt" className="placeholder">
                        Amount
                    </label>
                </div>
                
                <div className="input-container ic1">
                    <input id="invoice" className="input" type="number" placeholder=" " {...register("invoice_number")}/>
                    <div className="cut" />
                    <label htmlFor="invoice" className="placeholder">
                        Invoice Number
                    </label>
                </div>

                <div className="mt-4 d-flex justify-content-start">
                    <span className="pr-3 pl-1 pt-2 text-dark">Consultancy Start Date:</span>
                    <DatePicker onChange={setStartDate} value={startDate} className="pb-2 pt-2" />
                </div>

                <div className="mt-3 d-flex justify-content-start">
                    <span className="pr-5 pl-1 pt-2 text-dark">Consultancy End Date:</span>
                    <DatePicker onChange={setEndDate} value={endDate} className=" pt-2" />
                </div>

                
                <input type="submit" className="submit" value="Add Record" />
            </form>
        </div>

    )
}

export default ConsultancyAdd