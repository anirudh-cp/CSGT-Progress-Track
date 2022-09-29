import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import useFilterStore from "../../../API/Stores/FilterStore";
import { useState } from "react";

const PatentsAdd = ({ record }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const { token, empID } = useUserStore();
  const { setUpdateKey } = useFilterStore();

  const api = new API();
  const [startDate, setStartDate] = useState();
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    data.start_date = strftime("%Y-%m-%d", startDate);
    const response = await api.AddData(token, empID, "project", data);
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
        {record === undefined ? <div className="title">Add Project</div>
          : <div className="title">Update Project</div>
        }

        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            readOnly={record !== undefined ? true : false}
            {...register("title")}
            defaultValue={record !== undefined ? record.title : ""}
          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Title
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="status1"
            className="input dropdown"
            type="text"
            {...register("role")}
            defaultValue={record !== undefined ? record.role : ""}
          >
            <option value="PI">PI</option>
            <option value="Co-PI">Co-PI</option>
            <option value="Other">Other</option>
          </select>
          <div className="cut" />
          <label htmlFor="status1" className="placeholder">
            Role
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("funding_agency")}
            defaultValue={record !== undefined ? record.funding_agency : ""}
          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Funding Agency
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="areg"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("amount_registered")}
            defaultValue={record !== undefined ? record.amount_registered : ""}
          />
          <div className="cut" />
          <label htmlFor="areg" className="placeholder">
            Amount Registered
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="asanct"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("amount_sanctioned")}
            defaultValue={record !== undefined ? record.amount_sanctioned : ""}
          />
          <div className="cut" />
          <label htmlFor="asanct" className="placeholder">
            Amount Sanctioned
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

export default PatentsAdd;
