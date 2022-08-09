import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import { useState } from "react";

const PatentsAdd = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const { token, empID } = useUserStore();
  const api = new API();
  const [filedDate, setFiledDate] = useState();
  const [publishedDate, setPublishedDate] = useState();
  const [grantDate, setGrantDate] = useState();
  const [status1, setStatus1] = useState("No");
  const [status2, setStatus2] = useState("No");
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    data.filed_date = strftime("%Y-%m-%d", filedDate);
    data.published_date = strftime("%Y-%m-%d", publishedDate);
    data.granted_date = strftime("%Y-%m-%d", grantDate);
    const response = await api.AddPatents(token, empID, "patent", data);
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
        <div className="title">Add or Update Patents</div>

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
            Title
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("type")}
          >
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
          <div className="cut" />
          <label htmlFor="types" className="placeholder">
            Type of Patent
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
          />
          <div className="cut" />
          <label htmlFor="auths" className="placeholder">
            No. of Authors
          </label>
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">Patent Filed Date:</span>
          <DatePicker onChange={setFiledDate} value={filedDate} className="pb-2 pt-2"/>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="status1"
            className="input dropdown"
            type="text"
            value={status1}
            onChange={e => {setStatus1(e.target.value)}}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="status1" className="placeholder">
            Patent Published?
          </label>
        </div>

        <div style={{ display: (status1 === "Yes" ? 'block' : 'none') }}>
        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">Patent Published Date:</span>
          <DatePicker onChange={setPublishedDate} value={publishedDate} className="pb-2 pt-2"/>
        </div>
        </div>
        
        <div className="input-container ic1 dropdown">
          <select
            id="stat2"
            className="input dropdown"
            type="text"
            value={status2}
            onChange={e => {setStatus2(e.target.value)}}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="stat2" className="placeholder">
            Patent Granted?
          </label>
        </div>
        
        <div style={{ display: ((status1 === "Yes" && status2 === "Yes") ? 'block' : 'none') }}>
        <div className="mt-3 d-flex justify-content-start" >
          <span className="pr-5 pl-1 pt-2 text-dark">Patent Granted Date:</span>
          <DatePicker onChange={setGrantDate} value={grantDate} className="pb-2 pt-2"/>
        </div>
        </div>

        <input type="submit" className="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default PatentsAdd;
