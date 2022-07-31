import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useForm } from "react-hook-form";
import API from "../../../API/APIService";
import useUserStore from "../../../API/Stores/UserStore";
import { useState } from "react";


const PatentsAdd = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
        }
    });

    const { token, empID } = useUserStore();
    const api = new API()
    const [startDate, setStartDate] = useState(new Date());
    var strftime = require('strftime');

    const onSubmit = async (data) => {        
        console.log(data)
        data.patent_created_date = strftime("%Y-%m-%d", startDate)
        const response = await api.AddPatents(token, empID, data);
        alert(response);
    }
  
  
    return (
        <div className="d-flex justify-content-center top-container" style={{ height: "80vh" }}>
            <form className="form justify-content-center wrapper" style={{ height: "100%", width:"100%" }} onSubmit={handleSubmit(onSubmit)}>
                <div className="title">Add or Update Patents</div>

                <div className="input-container ic1">
                    <input
                        id="title"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                        {...register("patent_title")}
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
                        {...register("no_of_authors_in_patent")}
                    />
                    <div className="cut" />
                    <label htmlFor="auths" className="placeholder">
                        No. of Authors
                    </label>
                </div>

                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
                {/* AUTHOR INFO MULTIPLE ROWS DYNAMIC ADJUSTMENT */}
            

                <div className="input-container ic1 dropdown">
                    <select id="type" className="input dropdown" type="text" {...register("Type_of_patent")}>
                        <option value="national" disabled defaultValue="national">
                            Type of collaboration
                        </option>
                        <option value="National">National</option>
                        <option value="International">International</option>
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

                <div className="mt-4 d-flex justify-content-start">
                    <span className="pr-3 pl-1 pt-2 text-dark">Patent Created Date:</span>
                    <DatePicker onChange={setStartDate} value={startDate} className="pb-2 pt-2" />
                </div>

                <input type="submit" className="submit" value="Add Record" />
            </form>
        </div>
  )
}

export default PatentsAdd