import { useForm } from "react-hook-form";
import useIdentStore from "./../../../storages/IdentStore";
import useFilterStore from "./../../../storages/FilterStore";
import useData from "../../../utils/Data";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";


const EventsAdd = ({ record }) => {
  const { register, handleSubmit } = useForm();
  const { setUpdateKey } = useFilterStore();

  const { getEmpID } = useIdentStore();
  const { addData } = useData();
  const [attend, setAttend] = useState("Conducting");
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    
    if (data.amount_of_publication === "")
      data.amount_of_publication = 0
    if (data.no_of_participants === "")
      data.no_of_participants = 0

    let empID = await getEmpID();
    const response = await addData(empID, "event", data);
    alert(response);
    
    setUpdateKey(new Date());
  };

  return (
    <div
      className="d-flex justify-content-center top-container"
      style={{ height: "80vh" }}
    >
      <form
        className="form justify-content-center wrapper"
        style={{ height: "100%", width: "100%", textAlign: "center"}} 
        onSubmit={handleSubmit(onSubmit)}
      >
        {record === undefined ? <div className="title">Add Events</div>
          : <div className="title">Update Events</div>
        }

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
            defaultValue={record !== undefined ? record.type : ""}
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
            defaultValue={record !== undefined ? record.title : ""}
            readOnly={record !== undefined ? true : false}
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
            {...register("event")}
            defaultValue={record !== undefined ? record.event : ""}
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


        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("start_date")}
            defaultValue={record !== undefined ? record.start_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Start Date
          </label>
        </div>
        
        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("end_date")}
            defaultValue={record !== undefined ? record.end_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            End Date
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="auths"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("reg_fee")}
            defaultValue={record !== undefined ? record.reg_fee : ""}
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
            defaultValue={record !== undefined ? record.collaboration : ""}
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
            {...register("sponsored")}
            defaultValue={record !== undefined ? record.sponsored : ""}
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
            defaultValue={record !== undefined ? record.no_of_participants : ""}
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
              defaultValue={record !== undefined ? record.amount_from_vit : ""}
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


        <div className="input-container ic1">
          <input
            id="upload"
            className="input"
            type="text"
            placeholder=" "
            {...register("upload_link")}
            defaultValue={record !== undefined ? record.upload_link : ""}
          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Upload Link for Proof
          </label>
        </div>

        {record === undefined ?
          <input type="submit" className="submit" value="Add Record" /> :
          <input type="submit" className="submit" value="Update Record" />}


      </form>
    </div>
  );
};

export default EventsAdd;
