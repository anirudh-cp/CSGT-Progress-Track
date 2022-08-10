import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import { useState } from "react";

const IndustrialAdd = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const { token, empID } = useUserStore();
  const api = new API();
  const [startDate, setStartDate] = useState();
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    data.date = strftime("%Y-%m-%d", startDate);
    const response = await api.AddPatents(token, empID, "industrial", data);
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
        <div className="title">Add or Update Project</div>

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
        
        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("description")}
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
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="status1" className="placeholder">
            MOU Signed Status
          </label>
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">Date:</span>
          <DatePicker onChange={setStartDate} value={startDate} className="pb-2 pt-2"/>
        </div>
        
        <input type="submit" className="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default IndustrialAdd;
