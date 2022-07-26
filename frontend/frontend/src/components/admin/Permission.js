import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./AdminCSS.css";

export default function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="form justify-content-center">
        <div className="title">Alter Permissions</div>

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

        <div className="row">
          <div className="col-md-6">
            <button type="text" className="submit">
              Make Admin
            </button>
          </div>
          <div className="col-md-6">
            <button type="text" className="submit">
              Make Director
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
