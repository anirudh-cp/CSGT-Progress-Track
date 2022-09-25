import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import React, { useState } from "react";

const ConsultancyAdd = ({ record }) => {
  const { register, handleSubmit } = useForm();

  const { token, empID } = useUserStore();
  const api = new API();
  const [fund, setFund] = useState("No")
  var strftime = require("strftime");

  const onSubmit = async (data) => {
    console.log(data);

    if (data.amount_registered === "")
      data.amount_registered = 0;

    if (data.amount_sanctioned === "")
      data.amount_sanctioned = 0;
    
    if (data.invoice_number === "")
      data.invoice_number = 0;

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
        style={{ height: "100%", width: "100%", textAlign: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >

        {record === undefined ? <div className="title">Add Consultancy</div>
          : <div className="title">Update Consultancy</div>
        }

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("type")}
            defaultValue={record !== undefined ? record.type : ""}
          >
            <option value="Product development">Product development</option>
            <option value="Research Collaboration">Research Collaboration</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
            Type of Consultancy
          </label>
        </div>

        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1">
          <input
            id="cname"
            className="input"
            type="text"
            placeholder=" "
            readOnly={record !== undefined ? true : false}
            required
            {...register("company_name")}
            defaultValue={record !== undefined ? record.company_name : ""}
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
            defaultValue={record !== undefined ? record.description : ""}
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
            defaultValue={record !== undefined ? record.funding_status : ""}
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
            defaultValue={record !== undefined ? record.amount_registered : ""}
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
            defaultValue={record !== undefined ? record.amount_sanctioned : ""}
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
            defaultValue={record !== undefined ? record.invoice_number : ""}
          />
          <div className="cut" />
          <label htmlFor="invoice" className="placeholder">
            Invoice Number
          </label>
        </div>
        </div>

        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("start_date")}
            defaultValue={record !== undefined ? record.start_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            Start Date
          </label>
        </div>
        
        <div className="input-container ic1">
          <input
            id="amt"
            className="input"
            type="date"
            placeholder=" "
            {...register("end_date")}
            defaultValue={record !== undefined ? record.end_date : ""}
          />
          <div className="cut" />
          <label htmlFor="amt" className="placeholder">
            End Date
          </label>
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

export default ConsultancyAdd;
