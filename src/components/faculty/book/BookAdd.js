import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";

const BookAdd = ({ record }) => {
  const { register, handleSubmit } = useForm();
  const { token, empID } = useUserStore();
  const api = new API();

  const onSubmit = async (data) => {
    console.log(data);

    if (data.volume_no === "")
      data.volume_no = 0
    if (data.issue_no === "")
      data.issue_no = 0
    if (data.amount_of_publication === "")
      data.amount_of_publication = 0

    const response = await api.AddData(token, empID, "book", data);
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
        <div className="title">Add or Update Book Chapters</div>

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("type")}
            defaultValue={record !== undefined ? record.type : ""}
          >
            <option value="Book Chapter">Book Chapter</option>
            <option value="Book Editorial">Book Editorial</option>
          </select>
          <div className="cut" />
          <label htmlFor="typeCnf" className="placeholder">
            Type
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="jname"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("book_title")}
            readOnly={record !== undefined ? true : false}
            defaultValue={record !== undefined ? record.book_title : ""}
          />
          <div className="cut" />
          <label htmlFor="jname" className="placeholder">
            Book Title
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="title"
            className="input"
            type="text"
            placeholder=" "
            required
            {...register("chapter_title")}
            defaultValue={record !== undefined ? record.chapter_title : ""}
          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Chapter Title
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

        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

        <div className="input-container ic1 dropdown">
          <select
            id="type"
            className="input dropdown"
            type="text"
            {...register("collaboration")}
            defaultValue={record !== undefined ? record.collaboration : ""}
          >
            <option value="National">National</option>
            <option value="International">International</option>
            <option value="Internal">Internal</option>
          </select>
          <div className="cut" />
          <label htmlFor="typeCnf" className="placeholder">
            Type of collaboration
          </label>
        </div>
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
        {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}


        <div className="input-container ic1 dropdown">
          <select
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("indexing")}
            defaultValue={record !== undefined ? record.indexing : ""}
          >
            <option value="SCI">SCI</option>
            <option value="SCIE">SCIE</option>
            <option value="SCOPUS">SCOPUS</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
            Indexing
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="issn"
            className="input"
            type="number"
            placeholder=" "
            required
            {...register("isbn")}
            defaultValue={record !== undefined ? record.isbn : ""}
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
            defaultValue={record !== undefined ? record.year : ""}
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
            defaultValue={record !== undefined ? record.publisher_name : ""}
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
            defaultValue={record !== undefined ? record.type_of_publisher : ""}
          >
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
            Type of Publisher
          </label>
        </div>

        <div className="input-container ic1">
          <input
            id="vnum"
            className="input"
            type="number"
            placeholder=" "
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
            placeholder=" "
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
            placeholder=" "
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
            id="indexing"
            className="input dropdown"
            type="text"
            {...register("type_of_publication")}
            defaultValue={record !== undefined ? record.type_of_publication : ""}
          >
            <option value="Open Access">Open Access</option>
            <option value="Subscription">Subscription</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
            Type of Publication
          </label>
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
            placeholder=" "
            {...register("amount_of_publication")}
            defaultValue={record !== undefined ? record.amount_of_publication : ""}
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
            defaultValue={record !== undefined ? record.support : ""}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="cut" />
          <label htmlFor="type" className="placeholder">
            Support
          </label>
        </div>
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        {/* ONLY IF OPEN ACCESS IS SELECTED */}
        
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

export default BookAdd;
