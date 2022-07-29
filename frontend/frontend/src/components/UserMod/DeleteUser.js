import React, { useState } from "react";
import API from "../../API/APIService";

import useUserStore from '../../API/Stores/UserStore';


export default function App() {

  const [email, setEmail] = useState('')
  const api = new API()
  const { token } = useUserStore()

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await api.DeleteUser(token, email);
    alert(response);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="form justify-content-center">
        <div className="title">Delete Member</div>

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

        <button type="text" className="submit" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
