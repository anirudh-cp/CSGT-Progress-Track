import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";

import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";


const ConferenceAdd = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            DOI: "",
            Amount_of_Publication: 0,
            Support:"No"
          }
    });

    const { token, empID } = useUserStore();
    const api = new API()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    var strftime = require('strftime');
    

    const onSubmit = async (data) => {        
        console.log(data)
        data.Conference_startdate = strftime("%Y-%m-%d", startDate)
        data.Conference_enddate = strftime("%Y-%m-%d", endDate)
        const response = await api.AddPublication(token, empID, "conference", data);
        alert(response);
    }


    return (
        <div className="d-flex justify-content-center top-container" style={{ height: "80vh" }}>
            <form className="form justify-content-center wrapper" style={{ height: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                <div className="title">Add or Update Conference</div>

                <div className="input-container ic1">
                    <input
                        id="title"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("title")}
                    />
                    <div className="cut" />
                    <label htmlFor="title" className="placeholder">
                        Title
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="auths"
                        className="input"
                        type="number"
                        placeholder=" "
                        required
                        {...register("no_of_authors")}
                    />
                    <div className="cut" />
                    <label htmlFor="auths" className="placeholder">
                        No. of Authors
                    </label>
                </div>

                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                
                <div className="input-container ic1">
                    <input
                        id="desig"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("Designation")}
                    />
                    <div className="cut" />
                    <label htmlFor="desig" className="placeholder">
                        Author Designation
                    </label>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="type" className="input dropdown" type="text" {...register("Collaboration")}>
                        <option value="national" disabled defaultValue="national">
                            Type of collaboration
                        </option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                        <option value="Internal">Internal</option>
                    </select>
                </div>
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

                <div className="input-container ic1 dropdown">
                    <select id="position" className="input dropdown" type="text" {...register("Author_pos")}>
                        <option value="" disabled defaultValue="1">
                            Author Position
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div className="input-container ic1">
                    <input
                        id="jname"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("Conference_name")}
                    />
                    <div className="cut" />
                    <label htmlFor="jname" className="placeholder">
                        Conference name
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="jname"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("Place_of_conference")}
                    />
                    <div className="cut" />
                    <label htmlFor="jname" className="placeholder">
                        Conference Location
                    </label>
                </div>

                <div className="mt-4 d-flex justify-content-start">
                    <span className="pr-3 pl-1 pt-2 text-dark">Conference Start Date:</span>
                    <DatePicker onChange={setStartDate} value={startDate} className="pb-2 pt-2" />
                </div>

                <div className="mt-3 d-flex justify-content-start">
                    <span className="pr-5 pl-1 pt-2 text-dark">Conference End Date:</span>
                    <DatePicker onChange={setEndDate} value={endDate} className=" pt-2" />
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="type" className="input dropdown" type="text" {...register("Type")}>
                        <option value="national" disabled defaultValue="national">
                            Type of Conference
                        </option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                    </select>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Indexed_Scopus")}>
                        <option value="" disabled defaultValue="No">
                            Indexed in SCOPUS
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="input-container ic1">
                    <input id="doi" className="input" type="text" placeholder=" " {...register("DOI")}/>
                    <div className="cut" />
                    <label htmlFor="doi" className="placeholder">
                        Digital Object Identifier
                    </label>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Type_of_publication")}>
                        <option value="" disabled defaultValue="Open Access">
                            Type of Publication
                        </option>
                        <option value="Open Access">Open Access</option>
                        <option value="Subscription">Subscription</option>
                    </select>
                </div>

                {/* ONLY IF OPEN ACCESS IS SELECTED */}
                {/* ONLY IF OPEN ACCESS IS SELECTED */}
                <div className="input-container ic1">
                    <input id="fname" className="input" type="text" placeholder=" " {...register("Funder_name")}/>
                    <div className="cut" />
                    <label htmlFor="fname" className="placeholder">
                        Funder Name
                    </label>
                </div>
                <div className="input-container ic1">
                    <input id="pubamt" className="input" type="text" placeholder=" " {...register("Amount_of_Publication")}/>
                    <div className="cut" />
                    <label htmlFor="pubamt" className="placeholder">
                        Amount of Publication
                    </label>
                </div>
                
                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Support")}>
                        <option value="" disabled defaultValue="No">
                            Support from VIT
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                {/* ONLY IF OPEN ACCESS IS SELECTED */}
                {/* ONLY IF OPEN ACCESS IS SELECTED */}

                <input type="submit" className="submit" value="Add Record" />
            </form>
        </div>

    )
}

export default ConferenceAdd