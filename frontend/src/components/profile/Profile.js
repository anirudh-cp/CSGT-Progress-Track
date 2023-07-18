import { MDBIcon } from "mdb-react-ui-kit";
import "./../../assets/profile.css";

import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import AddFaculty from "./../UserMod/AddFaculty";


export default function Profile({ record }) {
    useEffect(() => {
        // console.log(record);
        return () => { };
    }, []);

    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className="main-body">
            <div className="row gutters-sm">
                <div className="col-md-4">
                    <div className="card card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img
                                src=""
                                alt="Image not found"
                                className="rounded-circle"
                                width={150}
                            />
                            <div className="mt-3">
                                <h4> {record.name} </h4>
                                <p className="text-muted font-size-sm">
                                    {" "}
                                    {record.designation}{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                                    <MDBIcon fas icon="globe" className="ICON-MDB" />
                                    Website
                                </h6>
                                <a href={record.personal_page}>
                                    <span className="textField longText"> {record.personal_page} </span>
                                </a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                                    <MDBIcon fab icon="linkedin" className="ICON-MDB" />
                                    LinkedIn
                                </h6>
                                <a href={record.linkedin}>
                                    <span className="textField longText"> {record.linkedin} </span>
                                </a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                                    <MDBIcon fab icon="researchgate" className="ICON-MDB" />
                                    Research Gate
                                </h6>
                                <a href={record.research_gate}>
                                    <span className="textField longText"> {record.research_gate} </span>
                                </a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                                    <MDBIcon fab icon="google" className="ICON-MDB" />G Scholar
                                </h6>
                                <a href={record.google_scholar}>
                                    <span className="textField longText"> {record.google_scholar} </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card card-body" style={{ height: "100%" }}>
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 textField"> {record.name} </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Designation</h6>
                            </div>
                            <div className="col-sm-9 textField">{record.designation}</div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">ORCID</h6>
                            </div>
                            <div className="col-sm-9 textField">{record.orcid}</div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Gender</h6>
                            </div>
                            <div className="col-sm-9 textField">{record.gender}</div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">EID</h6>
                            </div>
                            <div className="col-sm-9 textField"> {record.emp_id} </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">School</h6>
                            </div>
                            <div className="col-sm-9 textField"> {record.school} </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Join Date</h6>
                            </div>
                            <div className="col-sm-9 textField"> {record.date_of_join} </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">DOB</h6>
                            </div>
                            <div className="col-sm-9 textField"> {record.date_of_birth} </div>
                        </div>
                        <hr />

                        <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>

                            <Modal handleClick={() => { setShowEdit(!showEdit) }} show={showEdit}
                                childElement={<AddFaculty record={record} />}>
                            </Modal>

                            <button
                                className="ripple ripple-surface ripple-surface-light btn btn-sm btn-outline-dark mx-2"
                                size="sm"
                                color="dark"

                                onClick={() => {
                                    setShowEdit(!showEdit)
                                }}>
                                Edit Account Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
