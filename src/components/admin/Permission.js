import React, { useState } from "react";
import API from "../../API/APIService";

import useUserStore from '../../API/Stores/UserStore';


export default function App() {

  const [email, setEmail] = useState('')
  const api = new API()
  const { token } = useUserStore()

  const handleClick = async (group) => {
    // const response = await api.DeleteUser();
    const response = await api.ChangeGroup(token, email, group);
    alert(response);
  }


  return (
    <div className="d-flex justify-content-center">
      <div className="form justify-content-center">
        <div className="title">Alter Permissions</div>

        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="cut cut-short" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>

        <div className="row">
          <div className="col-md-6">
            <button type="text" className="submit" onClick={(e) => {handleClick('admin')}}>
              Make Admin
            </button>
          </div>
          <div className="col-md-6">
            <button type="text" className="submit" onClick={(e) => {handleClick('director')}}>
              Make Director
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
