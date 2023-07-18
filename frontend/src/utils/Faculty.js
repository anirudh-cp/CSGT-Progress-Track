import { useState } from "react";
import GenericAPI from "./../API/GenericAPI";
import { useNavigate } from "react-router-dom";


export default function useFaculty() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [loadEdit, setLoadEdit] = useState(false);
    
    const apiObject = new GenericAPI();

    return {

        loading,

        async getAllFacultyData() {
            setLoading(true);
            const response = await apiObject.get( "/api/faculty")
            setLoading(false);

            if (response.code === -2) {
                navigate("/");
            }

            return response.data
        },

        async getFacultyData(empID) {
            setLoading(true);
            const response = await apiObject.get( "/api/faculty/" + empID )
            setLoading(false);

            if (response.code === -2) {
                navigate("/");
            }

            return response.data[0]
        },


        async addFaculty(data) {

            if (data.ORCID_ID === "") {
                data.ORCID_ID = 0;
            }

            setLoadEdit(true);
            const response = await apiObject.put(  "/api/faculty/" + data.emp_id )
            setLoadEdit(false);

            if (response.code === -2) {
                navigate("/");
            }
            else if (response.code === 200) {
                return `Faculty has been updated successfully!`;
            }
            else if (response.code === 201) {
                return `Faculty has been created successfully!`;
            }

            return JSON.stringify(response.data)
        },

        
    }
}