import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";


const Header = ({ Name }) => {

  return (
    <div>
      <header className="">
        {/* Navbar */}
        <MDBNavbar expand="lg" dark style={{ backgroundColor: "#00008B" , height: "67px", padding:"0px"}}>
          <MDBContainer fluid>
            <MDBNavbarBrand style={{color: "white"}}>
              {Name != "" ? "Welcome " + Name : ""}
            </MDBNavbarBrand>

            {Name != "" &&
              
                <button outline color="light" size="md" onClick={(e) => e.preventDefault()}
                className="ripple ripple-surface ripple-surface-dark btn btn-outline-light btn-md">
                  Profile
                </button>
  
            }

          </MDBContainer>
        </MDBNavbar>
        {/* HEADING TEXT */}

        <div className="m-4">
          <p className="text-center h2 p-3" style={{ fontWeight: "bold" }}>
            VITCC - Centre for Smart Grid Technologies
          </p>
        </div>

        {/* LINE SEPARATOR */}
        <hr
          className=" mb-5 flex"
          style={{
            background: "#007BFF",
            color: "#007BFF",
            borderColor: "#007BFF",
            height: "1px",
          }}
        />
      </header>
    </div>
  );
};

export default Header;
