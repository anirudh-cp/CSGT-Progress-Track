import { useState } from "react";
import API from "./../API/Auth"
import localforage from "localforage";
import GenericAPI from "./../API/GenericAPI";


export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState(false);
    
    const apiObject = new API();
    const apiGenericObject = new GenericAPI()

    return {

        loading, authStatus, 

        async login(email, password) {
            setLoading(true);
            const response = await apiObject.login(email, password)
            setLoading(false);

            if (response['code'] === 200) {
                setAuthStatus(true);
                console.log(response.data)
                 await localforage.setItem('access_token', response.data.access);
				 await localforage.setItem('refresh_token', response.data.refresh);
            }


            return response
        },


        async logout() {
            setLoading(true);

            const token = await localforage.getItem('refresh_token');
            const response = await apiGenericObject.post('/api/user/logout', {'refresh_token':token })

            await localforage.clear()

            setLoading(false);
        }
       
    }
}