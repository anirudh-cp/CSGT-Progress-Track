import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useState } from "react";


export default function App() {
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());
  const [value3, onChange3] = useState(new Date());

  return (
    <div className="d-flex justify-content-center">
      <div className="form justify-content-center">
        <div className="title">Add Member</div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Name
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Designation
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            EID
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut cut-short" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Password
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            School
          </label>
        </div>

        <div className="mt-4 d-flex justify-content-start">
          <span className="pr-3 pl-1 pt-2 text-dark">Join Date:</span>
          <DatePicker
            onChange={onChange2}
            value={value2}
            className="pb-2 pt-2"
          />
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">DOB:</span>
          <DatePicker onChange={onChange2} value={value2} className=" pt-2" />
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Gender
          </label>
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            ORCID ID
          </label>
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Research Gate URL
          </label>
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            LinkedIn URL
          </label>
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Google Scholar URL
          </label>
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Personal URL
          </label>
        </div>

        <button type="text" className="submit">
          Add
        </button>
      </div>
    </div>
  );
}
