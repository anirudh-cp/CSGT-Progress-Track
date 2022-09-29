import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import useFilterStore from "../../../API/Stores/FilterStore";
import { useState } from "react";

const IndustrialAdd = ({ record }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const { token, empID } = useUserStore();
  const { setUpdateKey } = useFilterStore();

  const api = new API();
  const [startDate, setStartDate] = useState(null);
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    const response = await api.AddData(token, empID, "industrial", data);
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
        {record === undefined ? <div className="title">Add Industrial</div>
          : <div className="title">Update Industrial</div>
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
        
        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("description")}
            defaultValue={record !== undefined ? record.description : ""}

          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Description
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="status1"
            className="input dropdown"
            type="text"
            {...register("mou_signed")}
            defaultValue={record !== undefined ? record.mou_signed : ""}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="status1" className="placeholder">
            MOU Signed Status
          </label>
        </div>

                
        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="date"
            placeholder=" "
            required
            {...register("date")}
            defaultValue={record !== undefined ? record.date : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Date
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

export default IndustrialAdd;
