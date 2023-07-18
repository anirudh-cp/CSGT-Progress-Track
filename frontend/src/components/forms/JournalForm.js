import React, { useState } from "react";

import "./FormsCSS.css";


export default function App() {
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());
  const [value3, onChange3] = useState(new Date());

  return (
    <div className="d-flex justify-content-center top-container">
      <div className="form justify-content-center">
        <div className="title">Add Journal</div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="number"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            EID
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
            Title
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="number"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            No. of Authors
          </label>
        </div>

        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
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
            Author Name
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
            Author Designation
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select id="type" className="input dropdown" type="text">
            <option value="national" disabled selected>
              Type of collaboration
            </option>
            <option value="national">National</option>
            <option value="international">International</option>
            <option value="internal">Internal</option>
          </select>
        </div>
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1 dropdown">
          <select id="position" className="input dropdown" type="text">
            <option value="" disabled selected>
              Position
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
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
            Journal name
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select id="indexing" className="input dropdown" type="text">
            <option value="" disabled selected>
              Indexing
            </option>
            <option value="sci">SCI</option>
            <option value="scie">SCIE</option>
            <option value="scopus">SCOPUS</option>
          </select>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="number"
            step="0.01"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Impact Factor
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="number"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Year
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="number"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Volume No
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="number"
            placeholder=" "
            required
          />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Issue No
          </label>
        </div>

        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Digital Object Identifier
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select id="indexing" className="input dropdown" type="text">
            <option value="" disabled selected>
              Type of Publication
            </option>
            <option value="sci">Open Access</option>
            <option value="scie">Subscription</option>
          </select>
        </div>

        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Funder Name
          </label>
        </div>
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="firstname" className="placeholder">
            Amount of Publication
          </label>
        </div>
        <div className="input-container ic1 dropdown">
          <select id="indexing" className="input dropdown" type="text">
            <option value="" disabled selected>
              Support from VIT
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}

        <button type="text" className="submit">
          Add
        </button>
      </div>
    </div>
  );
}
