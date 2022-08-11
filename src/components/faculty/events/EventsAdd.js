import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";

import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";

const EventsAdd = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      DOI: "",
      Amount_of_Publication: 0,
      Support: "No",
    },
  });

  const { token, empID } = useUserStore();
  const api = new API();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [attend, setAttend] = useState("Conducting");
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    data.start_date = strftime("%Y-%m-%d", startDate);
    data.end_date = strftime("%Y-%m-%d", endDate);
    const response = await api.AddData(token, empID, "event", data);
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
        <div className="title">Add or Update Events</div>

        <div className="input-container ic1 dropdown">
          <select
            id="typeCnf"
            className="input dropdown"
            type="text"
            {...register("type")}
            value={attend}
            onChange={(e) => {
              setAttend(e.target.value);
            }}
          >
            <option value="Organized">Organized</option>
            <option value="Attended">Attended</option>
          </select>
          <div className="cut" />
          <label htmlFor="typeCnf" className="placeholder">
            Type
          </label>
        </div>

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
            Name
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="typeCnf"
            className="input dropdown"
            type="text"
            {...register("type")}
          >
            <option value="FDP">FDP</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
            <option value="Seminar">Seminar</option>
            <option value="Webinar">Webinar</option>

            <option
              value="VAP"
              style={{ display: attend === "Conducting" ? "block" : "none" }}
            >
              VAP
            </option>
            <option
              value="Guest Lecture"
              style={{ display: attend === "Conducting" ? "block" : "none" }}
            >
              Guest Lecture
            </option>
          </select>
          <div className="cut" />
          <label htmlFor="typeCnf" className="placeholder">
            Type of Event
          </label>
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">
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

        <div className="input-container ic1">
          <input
            id="auths"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("reg_fee")}
          />
          <div className="cut" />
          <label htmlFor="auths" className="placeholder">
            Registration Fee
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="typeCnf"
            className="input dropdown"
            type="text"
            {...register("collaboration")}
          >
            <option value="National">National</option>
            <option value="International">International</option>
            <option value="Internal">Internal</option>
          </select>
          <div className="cut" />
          <label htmlFor="typeCnf" className="placeholder">
            Type of Collaboration
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("sponspored")}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="indexing" className="placeholder">
            Sponsored
          </label>
        </div>

        <div
          className="input-container ic1"
          style={{ display: attend === "Organized" ? "block" : "none" }}
        >
          <input
            id="noAttend"
            className="input"
            type="text"
            placeholder=" "
            {...register("no_of_participants")}
          />
          <div className="cut" />
          <label htmlFor="noAttend" className="placeholder">
            Number of Participants
          </label>
        </div>

        <div
          className="input-container ic1 dropdown"
          style={{ display: attend === "Attended" ? "block" : "none" }}
        >
          <div className="input-container dropdown">
            <select
              id="indexing"
              className="input dropdown"
              type="text"
              {...register("amount_from_vit")}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="cut" />
            <label htmlFor="indexing" className="placeholder">
              Amount Received from VIT
            </label>
          </div>
        </div>

        <input type="submit" className="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default EventsAdd;
