import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import React, { useState } from "react";

const ConsultancyAdd = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Amount: 0,
      invoice_number: 0,
      Funding: "No",
    },
  });

  const { token, empID } = useUserStore();
  const api = new API();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [fund, setFund] = useState("No")
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);
    data.start_date = strftime("%Y-%m-%d", startDate);
    data.end_date = strftime("%Y-%m-%d", endDate);
    const response = await api.AddData(token, empID, "consultancy", data);
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
        <div className="title">Add or Update Consultancy</div>

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("type")}
          >
            <option value="national" disabled defaultValue="national">
              Type of Consultancy
            </option>
            <option value="Product development">Product development</option>
            <option value="Research Collaboration">Research Collaboration</option>
          </select>
        </div>

        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1">
          <input
            id="cname"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("company_name")}
          />
          <div className="cut" />
          <label htmlFor="cname" className="placeholder">
            Company name
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="desc"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("description")}
          />
          <div className="cut" />
          <label htmlFor="desc" className="placeholder">
            Description
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="fstat"
            className="input dropdown"
            type="text"
            {...register("funding_status")}
            value={fund}
            onChange={e => {setFund(e.target.value)}}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="fstat" className="placeholder">
            Funding Status
          </label>
        </div>

        <div style={{ display: (fund === "Yes" ? 'block' : 'none') }}>
        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="number"
            placeholder=" "
            {...register("amount_registered")}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Amount Registered
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="number"
            placeholder=" "
            {...register("amount_sanctioned")}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Amount Sanctioned
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="invoice"
            className="input"
            type="number"
            placeholder=" "
            {...register("invoice_number")}
          />
          <div className="cut" />
          <label htmlFor="invoice" className="placeholder">
            Invoice Number
          </label>
        </div>
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">
            Consultancy Start Date:
          </span>
          <DatePicker
            onChange={setStartDate}
            value={startDate}
            className="pb-2 pt-2"
          />
        </div>

        <div className="mt-3 d-flex justify-content-start">
          <span className="pr-5 pl-1 pt-2 text-dark">
            Consultancy End Date:
          </span>
          <DatePicker onChange={setEndDate} value={endDate} className=" pt-2" />
        </div>

        <input type="submit" className="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default ConsultancyAdd;
