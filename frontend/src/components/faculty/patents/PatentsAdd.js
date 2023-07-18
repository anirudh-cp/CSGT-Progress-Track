import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import useData from "../../../utils/Data";
import useIdentStore from "./../../../storages/IdentStore";
import useFilterStore from "./../../../storages/FilterStore";
import { useState } from "react";


const PatentsAdd = ({ record }) => {
  const { register, handleSubmit } = useForm();

  const { getEmpID } = useIdentStore();
  const { setUpdateKey } = useFilterStore();
  const { addData } = useData();

  const [status1, setStatus1] = useState("No");
  const [status2, setStatus2] = useState("No");
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);

    if (data.published_date === "")
      data.published_date = "1970-01-01";

    if (data.granted_date === "")
      data.granted_date = "1970-01-01";
    let empID = await getEmpID();
    const response = await addData(empID, "patent", data);
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
        style={{ height: "100%", width: "100%", textAlign: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {record === undefined ? <div className="title">Add Patent</div>
          : <div className="title">Update Patent</div>
        }
        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("title")}
            readOnly={record !== undefined ? true : false}
            defaultValue={record !== undefined ? record.title : ""}

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
            defaultValue={record !== undefined ? record.type : ""}

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
            defaultValue={record !== undefined ? record.no_of_authors : ""}

          />
          <div className="cut" />
          <label htmlFor="auths" className="placeholder">
            No. of Authors
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("filed_date")}
            defaultValue={record !== undefined ? record.filed_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Filed Date
          </label>
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
        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("published_date")}
            defaultValue={record !== undefined ? record.published_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Published Date
          </label>
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
        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("granted_date")}
            defaultValue={record !== undefined ? record.granted_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Granted Date
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
            defaultValue={record !== undefined ? record.end_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
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

export default PatentsAdd;
