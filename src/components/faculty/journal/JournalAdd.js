import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";


const JournalAdd = ({ record }) => {
  const { register, handleSubmit } = useForm();

  const { token, empID } = useUserStore();
  const [pubType, setPubType] = useState("Open Access")
  const api = new API();


  useEffect(() => {
    console.log(record);

    return () => {

    }
  }, [])


  const onSubmit = async (data) => {
    console.log(data);

    if (data.volume_no === "")
      data.volume_no = 0
    if (data.issue_no === "")
      data.issue_no = 0
    if (data.amount_of_publication === "")
      data.amount_of_publication = 0

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
        style={{ height: "100%", width: "100%", textAlign: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >

        {record === undefined ? <div className="title">Add Journal</div>
          : <div className="title">Update Journal</div>
        }

        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            required
            readOnly={record !== undefined ? true : false}
            {...register("article_title")}
            defaultValue={record !== undefined ? record.article_title : ""}
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

            required
            {...register("no_of_authors")}
            defaultValue={record !== undefined ? record.no_of_authors : 0}
            min={0}
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

            required
            {...register("journal_name")}
            defaultValue={record !== undefined ? record.journal_name : ""}
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

            {...register("impact_factor")}
            defaultValue={record !== undefined ? record.impact_factor : 0}
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

            required
            {...register("year")}
            defaultValue={record !== undefined ? record.year : ""}
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

            {...register("volume_no")}
            defaultValue={record !== undefined ? record.volume_no : ""}
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

            {...register("issue_no")}
            defaultValue={record !== undefined ? record.issue_no : ""}
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

            {...register("digital_obj_id")}
            defaultValue={record !== undefined ? record.digital_obj_id : ""}
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
            onChange={e => { setPubType(e.target.value) }}
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

              {...register("funder_name")}
              defaultValue={record !== undefined ? record.funder_name : ""}
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
              {...register("amount_of_publication")}
              defaultValue={record !== undefined ? record.amount_of_publication : ""}
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
            defaultValue={record !== undefined ? record.support : ""}
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


        <div className="input-container ic1">
          <input
            id="upload"
            className="input"
            type="text"
            required
            readOnly={record !== undefined ? true : false}
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

export default JournalAdd;
