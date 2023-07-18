import { useEffect, useState } from "react";
import './../../assets/home.css'
import useAuth from '../../utils/Auth';
import useIdentStore from '../../storages/IdentStore';

import { useNavigate } from 'react-router-dom';

import bg_img from "../../assets/login_bg.png"
import center_logo from "../../assets/center_logo.png"


export default function Home() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const { getGroup, setHideUserOptions } = useIdentStore();

    useEffect(() => {
        setHideUserOptions(true);     
    }, [])
    
    
    const onsubmit = async (e) => {
        e.preventDefault();

        const response = await login(email, password);

        if(response.code !== 200) {
            alert("Login Error. Please enter correct credentials.");
            return false;
        }

        let group = await getGroup();
        console.log(group)

        if (group === 'faculty') {
            navigate("/faculty");
        }
        else if (group === 'director') {
            navigate("/director");
        }
        else if (group === 'admin') {
            navigate("/admin");
        }
    }

    return (
        <div className="d-flex justify-content-center"
            style={{
                height: "calc(100vh - 67px)", display: "flex", flexDirection: "column",
                backgroundImage: `url(${bg_img})`, backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} >
            <div className="form-home justify-content-center" style={{ height: "fit-content", margin: "auto", textAlign: "center" }}>
                {/* <div className="title-home">Log In</div> */}
                <img src={center_logo} width={"80%"} style={{marginBottom: "10px"}}></img>
                

                <form onSubmit={onsubmit} autoComplete="off">
                    <div className="input-container ic1_home" style={{marginTop: "25px"}}>
                        <input id="email" className="input" type="email" 
                            style={{ backgroundColor: "rgb(245, 254, 255, 0.9)" }}
                            placeholder=" " value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <div className="cut_home cut-short" />
                        <label htmlFor="email" className="placeholder_home">
                            Email
                        </label>
                    </div>

                    <div className="input-container ic1_home" style={{marginBottom: "30px"}}>
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
