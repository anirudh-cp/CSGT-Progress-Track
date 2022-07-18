import "./HomeCSS.css";

import useStore from '../../API/store'
import { useEffect } from "react";
import Login from "../../API/Login";


import { useNavigate } from 'react-router-dom';  


export default function Home() {

    const navigate = useNavigate();
    const { email, password, groups, 
        setEmail, setPassword, setErrors, setToken, 
        setLoading, setGroup, setName, setEmpID } = useStore();

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {

            if (groups === 'faculty') {
                navigate("/faculty");
            }
            else if (groups === 'director') {
                navigate("/director");
            }
            else if (groups === 'admin') {
                navigate("/admin");
            }

        } else {
            setLoading(false);
        }
    }, []);


    const login = new Login();

    const onsubmit = async (e) => {
        e.preventDefault()
        const groups = await login.login(email, password, setEmail, setPassword, setErrors, setToken, setGroup, setName, setEmpID);
        if (groups === 'faculty') {
            navigate("/faculty");
        }
        else if (groups === 'director') {
            navigate("/director");
        }
        else if (groups === 'admin') {
            navigate("/admin");
        }

    }

    return (
        <div className="d-flex justify-content-center">
            <div className="form justify-content-center">
                <div className="title">Log In</div>

                <form onSubmit={onsubmit}>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="text"
                            placeholder=" " value={email}
                            required
                            onChange={e => setEmail(e.target.value)} />
                        <div className="cut cut-short" />
                        <label htmlFor="email" className="placeholder">
                            Email
                        </label>
                    </div>

                    <div className="input-container ic1">
                        <input id="password" className="input" type="password" placeholder=" "
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)} />
                        <div className="cut" />
                        <label htmlFor="password" className="placeholder">
                            Password
                        </label>
                    </div>
                    {// <div className="subtitle">
                        // <a href="url">Forgot your password?</a>
                        //</div>
                    }

                    <input type='submit' value='Log In' className="submitLogIn" />

                </form>
            </div>
        </div>
    );
}
