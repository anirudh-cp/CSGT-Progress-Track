import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import useFaculty from "./../../utils/Faculty"
import useFilterStore from "./../../storages/FilterStore";


export default function App({ record }) {
  const { register, handleSubmit } = useForm();

  const { setFacultyUpdateKey } = useFilterStore();
  const { addFaculty } = useFaculty();

  var strftime = require("strftime");
  
  const onSubmit = async (data) => {
    // console.log(data)
    const response = await addFaculty(data);
    alert(response);
    setFacultyUpdateKey(new Date());
  };

  return (
    <div className="d-flex justify-content-center"
      style={record !== undefined ? { height: "80vh" } : {}}>

      <form
        className={record !== undefined ? "form justify-content-center wrapper" : "form justify-content-center"}
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: "100%", width: "100%", textAlign: "center" }}
      >

        {record === undefined ? <div className="title">Add Faculty</div>
          : <div className="title">Update Faculty</div>
        }

        <div className="input-container ic1">
          <input
            id="email"
            className="input"
            type="email"
            placeholder=" "
            required
            {...register("user")}
            readOnly={record !== undefined ? true : false}
            defaultValue={record !== undefined ? record.user : ""}
          />
          <div className="cut" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="emp"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("emp_id")}
            readOnly={record !== undefined ? true : false}
            defaultValue={record !== undefined ? record.emp_id : ""}
          />
          <div className="cut" />
          <label htmlFor="emp" className="placeholder">
            EID
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="name"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("name")}
            defaultValue={record !== undefined ? record.name : ""}
          />
          <div className="cut" />
          <label htmlFor="name" className="placeholder">
            Name
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="desig"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("designation")}
            defaultValue={record !== undefined ? record.designation : ""}
          />
          <div className="cut" />
          <label htmlFor="desig" className="placeholder">
            Designation
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="school"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("school")}
            defaultValue={record !== undefined ? record.school : ""}
          />
          <div className="cut" />
          <label htmlFor="school" className="placeholder">
            School
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="date"
            placeholder=" "
            required
            {...register("date_of_join")}
            defaultValue={record !== undefined ? record.date_of_join : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Date of Join
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="date"
            placeholder=" "
            required
            {...register("date_of_birth")}
            defaultValue={record !== undefined ? record.date_of_join : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Date of Birth
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("gender")}
            defaultValue={record !== undefined ? record.gender : ""}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Internal">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
            Gender
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="ORCID_ID"
            className="input"
            type="text"
            placeholder=" "
            {...register("orcid")}
            defaultValue={record !== undefined ? record.orcid : ""}
          />
          <div className="cut" />
          <label htmlFor="ORCID_ID" className="placeholder">
            ORCID ID
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="rgate"
            className="input"
            type="text"
            placeholder=" "
            {...register("research_gate")}
            defaultValue={record !== undefined ? record.research_gate : ""}
          />
          <div className="cut" />
          <label htmlFor="rgate" className="placeholder">
            Research Gate URL
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="link"
            className="input"
            type="text"
            placeholder=" "
            {...register("linkedin")}
            defaultValue={record !== undefined ? record.linkedin : ""}
          />
          <div className="cut" />
          <label htmlFor="link" className="placeholder">
            LinkedIn URL
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="gscholar"
            className="input"
            type="text"
            placeholder=" "
            {...register("google_scholar")}
            defaultValue={record !== undefined ? record.google_scholar : ""}
          />
          <div className="cut" />
          <label htmlFor="gscholar" className="placeholder">
            Google Scholar URL
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="personal"
            className="input"
            type="text"
            placeholder=" "
            {...register("personal_page")}
            defaultValue={record !== undefined ? record.personal_page : ""}
          />
          <div className="cut" />
          <label htmlFor="personal" className="placeholder">
            Personal URL
          </label>
        </div>


        {record === undefined ?
          <input type="submit" className="submit" value="Add Record" /> :
          <input type="submit" className="submit" value="Update Record" />}
      </form>
    </div>
  );
}
