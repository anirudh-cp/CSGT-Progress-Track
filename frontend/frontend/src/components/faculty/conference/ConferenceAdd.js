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
      Support: "No",
    },
  });

  const { token, empID } = useUserStore();
  const api = new API();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    data.Conference_startdate = strftime("%Y-%m-%d", startDate);
    data.Conference_enddate = strftime("%Y-%m-%d", endDate);
    const response = await api.AddPublication(token, empID, "conference", data);
    alert(response);
  };

  return (
    <div
      className="d-flex justify-content-center top-container"
      style={{ height: "80vh" }}
    >
      <form
        className="form justify-content-center wrapper"
        style={{ height: "100%", width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {...register("designation")}
          />
          <div className="cut" />
          <label htmlFor="desig" className="placeholder">
            Author Designation
          </label>
        </div>
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("conference_name")}
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
            {...register("place")}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Conference Location
          </label>
        </div>

        <div className="mt-4 d-flex justify-content-start">
          <span className="pr-3 pl-1 pt-2 text-dark">
            Conference Start Date:
          </span>
          <DatePicker
            onChange={setStartDate}
            value={startDate}
            className="pb-2 pt-2"
          />
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">Conference End Date:</span>
          <DatePicker onChange={setEndDate} value={endDate} className=" pt-2" />
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("type")}
          >
            <option value="national" disabled defaultValue="national">
              Type of Conference
            </option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("indexing")}
          >
            <option value="" disabled defaultValue="No">
              Indexed In
            </option>
            <option value="SCI">SCI</option>
            <option value="SCIE">SCIE</option>
            <option value="SCOPUS">SCOPUS</option>
            <option value="Springer">Springer</option>
            <option value="Ei Compendex">Ei Compendex</option>
          </select>
        </div>

        <div className="input-container ic1">
          <input
            id="doi"
            className="input"
            type="text"
            placeholder=" "
            {...register("digital_object_id")}
          />
          <div className="cut" />
          <label htmlFor="doi" className="placeholder">
            Digital Object Identifier
          </label>
        </div>

        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        <div className="input-container ic1">
          <input
            id="fname"
            className="input"
            type="text"
            placeholder=" "
            {...register("funder_name")}
          />
          <div className="cut" />
          <label htmlFor="fname" className="placeholder">
            Funder Name
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="pubamt"
            className="input"
            type="text"
            placeholder=" "
            {...register("amount_of_Publication")}
          />
          <div className="cut" />
          <label htmlFor="pubamt" className="placeholder">
            Amount of Publication
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("support")}
          >
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
  );
};

export default ConferenceAdd;
