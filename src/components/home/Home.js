import './../../assets/home.css'
import Login from "../../API/Login";

import useAuthStore from '../../API/Stores/AuthStore';
import useUserStore from '../../API/Stores/UserStore';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Home() {

    const navigate = useNavigate();
    const { email, password, setEmail, setPassword, setErrors, AuthDeleteEverything } = useAuthStore();
    const { group, setToken, setGroup, setName, setEmpID, UserDeleteEverything } = useUserStore();

    const login = new Login();

    useEffect(() => {
        AuthDeleteEverything();
        UserDeleteEverything();
    }, [])


    const onsubmit = async (e) => {
        e.preventDefault();

        const response = await login.login(email, password, setEmail, setPassword, setErrors, setToken, setGroup, setName, setEmpID);
        if (response === 'faculty') {
            navigate("/faculty");
        }
        else if (response === 'director') {
            navigate("/director");
        }
        else if (response === 'admin') {
            navigate("/admin");
        }
    }

    return (
        <div className="d-flex justify-content-center"
            style={{
                height: "calc(100vh - 67px)", display: "flex", flexDirection: "column",
                backgroundImage: "url(/Images/login_bg.png)", backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} >
            <div className="form-home justify-content-center" style={{ height: "fit-content", margin: "auto", textAlign: "center" }}>
                {/* <div className="title-home">Log In</div> */}
                <img src="/Images/center_logo.png" width={"80%"} style={{marginBottom: "10px"}}></img>
                

                <form onSubmit={onsubmit} autoComplete="off">
                    <div className="input-container ic1">
                        <input id="email" className="input" type="email" style={{ backgroundColor: "rgb(245, 254, 255, 0.9)" }}
                            placeholder=" " value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <div className="cut_home cut-short" />
                        <label htmlFor="email" className="placeholder_home">
                            Email
                        </label>
                    </div>

                    <div className="input-container ic1" style={{marginBottom: "30px"}}>
                        <input id="password" className="input" type="password" placeholder=" "
                            style={{ backgroundColor: "rgb(245, 254, 255, 0.9)" }}
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="new-password" />
                        <div className="cut_home" />
                        <label htmlFor="password" className="placeholder_home">
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
