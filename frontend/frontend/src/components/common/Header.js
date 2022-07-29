import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from "mdb-react-ui-kit";
import useUserStore from "../../API/Stores/UserStore";

import Dropdown from "./Dropdown";

const Header = () => {

    const { name } = useUserStore();

    return (
        <header className="">
            {/* Navbar */}
            <MDBNavbar expand="lg" dark style={{ backgroundColor: "#00008B", height: "67px", padding: "0px" }}>
                <MDBContainer fluid>

                    <MDBNavbarBrand style={{ color: "white" }}>
                        {name != "" && name != undefined ? "Welcome " + name : ""}
                    </MDBNavbarBrand>

                    {name != "" && name != undefined &&
                        <Dropdown />
                    }
                </MDBContainer>
            </MDBNavbar>


            {/* HEADING TEXT */}
            <div className="m-4">
                <p className="text-center h2 p-3" style={{ fontWeight: "bold" }}>
                    VIT C: Centre for Smart Grid Technologies
                </p>
            </div>

            {/* LINE SEPARATOR */}
            <hr
                className=" mb-5 flex"
                style={{background: "#007BFF", color: "#007BFF", borderColor: "#007BFF", height: "1px" }}
            />
        </header>

    );
};

export default Header;
