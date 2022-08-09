import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";

const EditorAdd = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Vol_no: 0,
      Issue_no: 0,
      DOI: "",
      Amount_of_Publication: 0,
      Support: "No",
    },
  });
  const { token, empID } = useUserStore();
  const api = new API();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await api.AddPublication(
      token,
      empID,
      "book_editor",
      data
    );
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
        <div className="title">Add or Update Book Editorials</div>

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
            Book Title
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

        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

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
          </select>
        </div>

        <div className="input-container ic1">
          <input
            id="issn"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("isbn")}
          />
          <div className="cut" />
          <label htmlFor="issn" className="placeholder">
            ISSN ISBN Number
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
            id="pname"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("publisher_name")}
          />
          <div className="cut" />
          <label htmlFor="pname" className="placeholder">
            Publisher Name
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("type_of_publisher")}
          >
            <option value="national" disabled defaultValue="national">
              Type of Publisher
            </option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
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
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("type_of_publication")}
          >
            <option value="" disabled defaultValue="Open Access">
              Type of Publication
            </option>
            <option value="Open Access">Open Access</option>
            <option value="Subscription">Subscription</option>
          </select>
        </div>

        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
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
            {...register("amount_of_Publication")}
          />
          <div className="cut" />
          <label htmlFor="pubamt" className="placeholder">
            Amount of Publication
          </label>
        </div>

        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("support")}
          >
            <option value="" disabled defaultValue="No">
              Support from VIT
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}

        <input type="submit" className="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default EditorAdd;
