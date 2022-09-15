import { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";


const JournalAdd = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      impact_factor: 0,
      volume_no: 0,
      issue_no: 0,
      digital_obj_id: "",
      amount_of_publication: 0,
      support: "No",
    },
  });

  const { token, empID } = useUserStore();
  const [pubType, setPubType] = useState("Open Access")
  const api = new API();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await api.AddData(token, empID, "journal", data);
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
        <div className="title">Add or Update Journal</div>

        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("article_title")}
          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Title
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

        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("collaboration")}
          >
            <option value="National">National</option>
            <option value="International">International</option>
            <option value="Internal">Internal</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
          Type of collaboration
          </label>
        </div>
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("journal_name")}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Journal name
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("indexing")}
          >
            <option value="" disabled defaultValue="SCI">
              Indexing
            </option>
            <option value="SCI">SCI</option>
            <option value="SCIE">SCIE</option>
            <option value="SCOPUS">SCOPUS</option>
            <option value="Springer">Springer</option>
            <option value="Ei Compendex">Ei Compendex</option>
          </select>
          <div className="cut" />
          <label htmlFor="indexing" className="placeholder">
          Indexing
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="ifactor"
            className="input"
            type="number"
            step="0.01"
            placeholder=" "
            {...register("impact_factor")}
          />
          <div className="cut" />
          <label htmlFor="ifactor" className="placeholder">
            Impact Factor
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="year"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("year")}
          />
          <div className="cut" />
          <label htmlFor="year" className="placeholder">
            Year
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="vnum"
            className="input"
            type="number"
            placeholder=" "
            {...register("volume_no")}
          />
          <div className="cut" />
          <label htmlFor="vnum" className="placeholder">
            Volume No
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="inum"
            className="input"
            type="number"
            placeholder=" "
            {...register("issue_no")}
          />
          <div className="cut" />
          <label htmlFor="inum" className="placeholder">
            Issue No
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="doi"
            className="input"
            type="text"
            placeholder=" "
            {...register("digital_obj_id")}
          />
          <div className="cut" />
          <label htmlFor="doi" className="placeholder">
            Digital Object Identifier
          </label>
        </div>

        
        <div className="input-container ic1 dropdown">
          <select
            id="type_of_publication"
            className="input dropdown"
            type="text"
            {...register("type_of_publication")}
            value={pubType}
            onChange={e => {setPubType(e.target.value)}}
          >
            <option value="Open Access">Open Access</option>
            <option value="Subscription">Subscription</option>
          </select>
          <div className="cut" />
          <label htmlFor="type_of_publication" className="placeholder">
          Type of Publication
          </label>
        </div>

      <div style={{ display: (pubType === "Open Access" ? 'block' : 'none') }}>
        <div className="input-container ic1">
          <input
            id="fname"
            className="input"
            type="text"
            placeholder=" "
            {...register("funder_name")}
          />
          <div className="cut" />
          <label htmlFor="fname" className="placeholder">
            Funder Name
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="pubamt"
            className="input"
            type="text"
            placeholder=" "
            {...register("amount_of_publication")}
          />
          <div className="cut" />
          <label htmlFor="pubamt" className="placeholder">
            Amount of Publication
          </label>
        </div>

        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="support"
            className="input dropdown"
            type="text"
            {...register("support")}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="support" className="placeholder">
          Support from VIT
          </label>
        </div>
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}

        <input type="submit" className="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default JournalAdd;
