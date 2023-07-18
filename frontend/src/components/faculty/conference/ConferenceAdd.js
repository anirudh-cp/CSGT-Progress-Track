import { useForm } from "react-hook-form";
import useData from "../../../utils/Data";
import useIdentStore from "./../../../storages/IdentStore";
import useFilterStore from "./../../../storages/FilterStore";

import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";

const ConferenceAdd = ({ record }) => {
  const { register, handleSubmit } = useForm();

  const { getEmpID } = useIdentStore();
  const { setUpdateKey } = useFilterStore();

  const { addData } = useData();
  const [attend, setAttend] = useState("Conducting")
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);

    if (data.no_of_attendees === "")
      data.no_of_attendees = 0
    if (data.amount_of_publication === "")
      data.amount_of_publication = 0

    let empID = await getEmpID();
    const response = await addData(empID, "conference", data);
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
        style={{ height: "100%", width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {record === undefined ? <div className="title">Add Conference</div>
          : <div className="title">Update Conference</div>
        }

        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("article_title")}
            readOnly={record !== undefined ? true : false}
            defaultValue={record !== undefined ? record.article_title : ""}
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
            defaultValue={record !== undefined ? record.no_of_authors : ""}
          />
          <div className="cut" />
          <label htmlFor="auths" className="placeholder">
            No. of Authors
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("conference_name")}
            defaultValue={record !== undefined ? record.conference_name : ""}
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
            defaultValue={record !== undefined ? record.place : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Conference Location
          </label>
        </div>

        
        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="date"
            placeholder=" "
            required
            {...register("start_date")}
            defaultValue={record !== undefined ? record.start_date : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Start Date
          </label>
        </div>


        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="date"
            placeholder=" "
            required
            {...register("end_date")}
            defaultValue={record !== undefined ? record.end_date : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            End Date
          </label>
        </div>


        <div className="input-container ic1 dropdown">
          <select
            id="typeCnf"
            className="input dropdown"
            type="text"
            {...register("type")}
            defaultValue={record !== undefined ? record.type : ""}
          >
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
          <div className="cut" />
            <label htmlFor="typeCnf" className="placeholder">
              Type of Conference
            </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("indexing")}
            defaultValue={record !== undefined ? record.indexing : ""}
          >
            <option value="SCI">SCI</option>
            <option value="SCIE">SCIE</option>
            <option value="SCOPUS">SCOPUS</option>
            <option value="Springer">Springer</option>
            <option value="Ei Compendex">Ei Compendex</option>
          </select>
          <div className="cut" />
          <label htmlFor="indexing" className="placeholder">
            Indexing
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="conduct"
            className="input dropdown"
            type="text"
            {...register("conducting")}
            value={attend}
            onChange={e => {setAttend(e.target.value)}}
            defaultValue={record !== undefined ? record.conducting : ""}
          >
            <option value="Conducting">Conducting</option>
            <option value="Attending">Attending</option>
          </select>
          <div className="cut" />
          <label htmlFor="conduct" className="placeholder">
            Role
          </label>
        </div>

        <div className="input-container ic1" style={{ display: (attend === "Conducting" ? 'block' : 'none') }}>
          <input
            id="noAttend"
            className="input"
            type="text"
            placeholder=" "
            {...register("no_of_attendees")}
            defaultValue={record !== undefined ? record.no_of_attendees : ""}
          />
          <div className="cut" />
          <label htmlFor="noAttend" className="placeholder">
            Number of Attendees
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="published_as"
            className="input dropdown"
            type="text"
            {...register("published_as")}
            defaultValue={record !== undefined ? record.published_as : ""}
          >
            <option value="Research Paper">Research Paper</option>
          </select>
          <div className="cut" />
          <label htmlFor="published_as" className="placeholder">
            Published as
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="doi"
            className="input"
            type="text"
            placeholder=" "
            {...register("digital_object_id")}
            defaultValue={record !== undefined ? record.digital_object_id : ""}
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
            defaultValue={record !== undefined ? record.funder_name : ""}
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
            {...register("amount_of_publication")}
            defaultValue={record !== undefined ? record.amount_of_publication : ""}
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
            defaultValue={record !== undefined ? record.support : ""}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="support" className="placeholder">
          Support from VIT
          </label>
        </div>
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}

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

export default ConferenceAdd;
