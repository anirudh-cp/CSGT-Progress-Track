import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import useIdentStore from "../../storages/IdentStore";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

import img from "../../assets/vit_white.png"

const Header = () => {

    const { hideUserOptions, getName } = useIdentStore();

    const [name, setName] = useState("");

    const fetchData = async () => {
        let name = await getName();
        console.log(name)
        setName(name);
    }

    useEffect(() => {
      fetchData();
    }, [])
    

    return (
        <header className="">
            {/* Navbar */}
            <MDBNavbar expand="lg" dark style={{ backgroundColor: "#00008B", height: "67px", padding: "0px" }}>
                <MDBContainer fluid>

                    <MDBNavbarBrand style={{ color: "white" }}>
                        {
                            //    name != "" && name != undefined ? "Welcome " + name : ""
                        }
                        <img src={img} height="57px"></img>
                    </MDBNavbarBrand>

                    {hideUserOptions===false &&
                        <Dropdown name={name} />
                    }
                </MDBContainer>
            </MDBNavbar>
            
            {hideUserOptions===false &&
                <>
                    {/* HEADING TEXT */}
                    <div className="m-4">
                        <p className="text-center h2 p-3" style={{ fontWeight: "bold" }}>
                            VIT Chennai: Centre for Smart Grid Technologies
                        </p>
                    </div>

                    {/* LINE SEPARATOR */}
                    <hr
                        className=" mb-5 flex"
                        style={{ background: "#007BFF", color: "#007BFF", borderColor: "#007BFF", height: "1px" }}
                    />
                </>
            }
        </header>

    );
};

export default Header;
