import { useState } from "react";
import GenericAPI from "./../API/GenericAPI";
import { useNavigate } from "react-router-dom";


export default function useData() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [loadEdit, setLoadEdit] = useState(false);
    const [loadDelete, setLoadDelete] = useState(false);
    
    const apiObject = new GenericAPI();

    return {

        loading, loadEdit, loadDelete,

        async getData(empID, type, startDate, endDate) {
            setLoading(true);
            const response = await apiObject.get( "/api/data/" + empID + "/" + type + "/" + startDate + "/" + endDate)
            setLoading(false);

            if (response.code === -2) {
                navigate("/");
            }

            return response.data
        },


        async addData(empID, type, data) {
            setLoadEdit(true);
            const response = await apiObject.put( "/api/data/" + empID + "/" + type, data)
            setLoadEdit(false);

            if (response.code === -2) {
                navigate("/");
            }
            else if (response.code === 200) {
                return `${type} has been updated successfully!`;
            }
            else if (response.code === 201) {
                return `${type} has been created successfully!`;
            }

            return JSON.stringify(response.data)
        },


        async deleteData(record_id, type) {
            setLoadDelete(true);
            const response = await apiObject.delete("/api/data/" + type + "/" + record_id)
            setLoadDelete(false);

            if (response.code === -2) {
                navigate("/");
            }
            else if (response.code === 200) {
                return "Record has been deleted successfully.";
            }
            else {
                return "Record not found to delete, operation failed.";
            }


            return response
        },
       
    }
}