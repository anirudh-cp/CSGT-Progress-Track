import { useState } from "react";
import GenericAPI from "../API/GenericAPI";
import { useNavigate } from "react-router-dom";


export default function useUsers() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [loadEdit, setLoadEdit] = useState(false);
    const [loadDelete, setLoadDelete] = useState(false);

    const apiObject = new GenericAPI();

    return {

        loading, loadEdit, loadDelete,

        async changeGroup(email, group) {
            setLoading(true);
            const response = await apiObject.post("/api/actions/users",
                {
                    email: email,
                    group: group,
                }
            )
            setLoading(false);

            if (response.code === -2) {
                navigate("/");
            }
            else if (response.code === 200) {
                let resp = await response.json();
                return resp.response + " to " + resp.group;
            }
            else if (response.code === 404) {
                return await response.json();
            }
            else {
                return "Error"
            }

            return response.data
        },


        async addUser(email, password, password2, destinationGroup) {
            setLoadEdit(true);
            const response = await apiObject.put("/api/account/register",
                {
                    email: email,
                    password: password,
                    password2: password2,
                    destinationGroup: destinationGroup,
                }
            )
            setLoadEdit(false);

            if (response.code === -2) {
                navigate("/");
            }
            else if (response.code === 200) {
                return `User has been updated successfully!`;
            }
            else if (response.code === 201) {
                return `User has been created successfully!`;
            }

            return JSON.stringify(response.data)
        },


        async deleteUser(email) {
            setLoadDelete(true);
            const response = await apiObject.post("/api/actions/users", {'email': email})
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