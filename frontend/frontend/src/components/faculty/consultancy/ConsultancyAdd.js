import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";


const ConsultancyAdd = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            Impact_factor: 0,
            Vol_no: 0,
            Issue_no: 0,
            DOI: "",
            Amount_of_Publication: 0
          }
    });
    const { token, empID } = useUserStore();
    const api = new API()
    
    const onSubmit = async (data) => {        
        console.log(data)
        const response = await api.AddPublication(token, empID, "journal", data);
        alert(response);
    }


    return (
        <div className="d-flex justify-content-center top-container" style={{ height: "80vh" }}>
            <form className="form justify-content-center wrapper" style={{ height: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                <div className="title">Add or Update Journal</div>

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
                        id="firstname"
                        className="input"
                        type="number"
                        placeholder=" "
                        required
                        {...register("no_of_authors")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        No. of Authors
                    </label>
                </div>

                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                
                <div className="input-container ic1">
                    <input
                        id="firstname"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("Designation")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Author Designation
                    </label>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="type" className="input dropdown" type="text" {...register("Collaboration")}>
                        <option value="national" disabled defaultValue="national">
                            Type of collaboration
                        </option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                        <option value="Internal">Internal</option>
                    </select>
                </div>
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}

                <div className="input-container ic1 dropdown">
                    <select id="position" className="input dropdown" type="text" {...register("Author_pos")}>
                        <option value="" disabled defaultValue="1">
                            Author Position
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div className="input-container ic1">
                    <input
                        id="firstname"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("Journal_name")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Journal name
                    </label>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Indexing")}>
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
                        id="firstname"
                        className="input"
                        type="number"
                        step="0.01"
                        placeholder=" "
                        {...register("Impact_factor")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Impact Factor
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="firstname"
                        className="input"
                        type="number"
                        placeholder=" "
                        required
                        {...register("year")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Year
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="firstname"
                        className="input"
                        type="number"
                        placeholder=" "
                        {...register("Vol_no")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Volume No
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="firstname"
                        className="input"
                        type="number"
                        placeholder=" "
                        {...register("Issue_no")}
                    />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Issue No
                    </label>
                </div>

                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" " {...register("DOI")}/>
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Digital Object Identifier
                    </label>
                </div>

                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Type_of_publication")}>
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
                    <input id="firstname" className="input" type="text" placeholder=" " {...register("Funder_name")}/>
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Funder Name
                    </label>
                </div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" " {...register("Amount_of_Publication")}/>
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Amount of Publication
                    </label>
                </div>
                <div className="input-container ic1 dropdown">
                    <select id="indexing" className="input dropdown" type="text" {...register("Support")}>
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

    )
}

export default JournalAdd