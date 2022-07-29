import React from 'react'
import { useForm } from "react-hook-form";
import useUserStore from '../../API/Stores/UserStore';
import API from '../../API/APIService';


const AddUser = () => {
    const { register, handleSubmit } = useForm();
    const { token } = useUserStore();
    const api = new API()

    const onSubmit = async (data) => {
        const response = await api.AddUser(token, data.email, data.password, data.password2, data.destinationGroup);
        alert(response);
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="form justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="title">Add User</div>

                <div className="input-container ic1">
                    <input
                        id="email"
                        className="input"
                        type="email"
                        placeholder=" "
                        required
                        {...register("email")}
                    />
                    <div className="cut" />
                    <label htmlFor="email" className="placeholder">
                        Email
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="password1"
                        className="input"
                        type="password"
                        placeholder=" "
                        required
                        {...register("password")}
                    />
                    <div className="cut" />
                    <label htmlFor="password1" className="placeholder">
                        Password
                    </label>
                </div>

                <div className="input-container ic1">
                    <input
                        id="password2"
                        className="input"
                        type="password"
                        placeholder=" "
                        required
                        {...register("password2")}
                    />
                    <div className="cut" />
                    <label htmlFor="password2" className="placeholder">
                        Repeat Password
                    </label>
                </div>

                <select {...register("destinationGroup")} className='input-container ic1'>
                    <option value="admin">Admin</option>
                    <option value="director">Director</option>
                    <option value="faculty">Faculty</option>
                </select>

                <input type="submit" className="submit" value='Add' />
            </form>
        </div>
    )
}

export default AddUser