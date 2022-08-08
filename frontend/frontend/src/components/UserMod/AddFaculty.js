import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../API/APIService";
import useUserStore from "../../API/Stores/UserStore";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [DOJ, setDOJ] = useState(new Date());
  const [DOB, setDOB] = useState(new Date());
  const { token } = useUserStore();
  var strftime = require("strftime");
  const api = new API();

  const onSubmit = async (data) => {
    data.DOJ = strftime("%Y-%m-%d", DOJ);
    data.DOB = strftime("%Y-%m-%d", DOB);
    // console.log(data)
    const response = await api.AddFaculty(token, data);
    alert(response);
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="form justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="title">Add or Update Member Details</div>

        <div className="input-container ic1">
          <input
            id="email"
            className="input"
            type="email"
            placeholder=" "
            required
            {...register("user")}
          />
          <div className="cut" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="name"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("Name")}
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
            {...register("Designation")}
          />
          <div className="cut" />
          <label htmlFor="desig" className="placeholder">
            Designation
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
          />
          <div className="cut" />
          <label htmlFor="emp" className="placeholder">
            EID
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="school"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("School")}
          />
          <div className="cut" />
          <label htmlFor="school" className="placeholder">
            School
          </label>
        </div>

        <div className="mt-4 d-flex justify-content-start">
          <span className="pr-3 pl-1 pt-2 text-dark">Join Date:</span>
          <DatePicker onChange={setDOJ} value={DOJ} className="pb-2 pt-2" />
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">DOB:</span>
          <DatePicker onChange={setDOB} value={DOB} className=" pt-2" />
        </div>

        <select {...register("Gender")} className="input-container ic1">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="input-container ic1">
          <input
            id="ORCID_ID"
            className="input"
            type="text"
            placeholder=" "
            {...register("ORCID_ID")}
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
            {...register("Researchgate")}
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
            {...register("Google_scholar_name")}
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
            {...register("Personal_page")}
          />
          <div className="cut" />
          <label htmlFor="personal" className="placeholder">
            Personal URL
          </label>
        </div>

        <input type="submit" className="submit" value="Add" />
      </form>
    </div>
  );
}
