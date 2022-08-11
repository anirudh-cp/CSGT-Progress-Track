import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBTypography,
} from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import Profile from "./../../profile/Profile";
import ProgressReport from './../progress/ProgressReport'

const FacultyList = ({ data }) => {
    const [show, setShow] = useState(false);
    const [showProg, setShowProg] = useState(false);
    const [out, setOut] = useState([]);
    const [currentRecord, setCurrentRecord] = useState([]);

    const handleClick = (obj) => {
        setCurrentRecord(obj);
        setShow(!show);
    };


    const handleProgress = () => {
        setShowProg(!showProg)
        console.log(out)
    }

    const handleOnChange = (event) => {
        const { checked, value } = event.currentTarget;

        setOut(
            prev => checked
                ? [...prev, value]
                : prev.filter(val => val !== value)
        );

    }

    return (
        <div key="faculty-key">

            {/* <div className="pt-2 pb-5">
        <MDBTypography listInLine className="mb-0">
          <li className="list-inline-item">JR-Journal |</li>
          <li className="list-inline-item">CF-Conference |</li>
          <li className="list-inline-item">CF-Conference |</li>
          <li className="list-inline-item"> EV-Event |</li>
          <li className="list-inline-item"> CN-Consultancy |</li>
          <li className="list-inline-item">BC-Book Chapter |</li>
          <li className="list-inline-item"> BE-Book Editor |</li>
          <li className="list-inline-item">PA-Patent |</li>
        </MDBTypography>
      </div> */}

            <div className="pt-2 pb-2">
                <Modal handleClick={() => { setShowProg(!showProg) }} show={showProg}
                    childElement={<ProgressReport employees={out} />}>
                </Modal>
                <button
                    className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                    size="sm"
                    color="dark"
                    onClick={() => {
                        handleProgress()
                    }}>
                    Generate Selective Progress Report
                </button>
            </div>

            <MDBTable striped key="faculty-table-key">
                <MDBTableHead>
                    <tr key="head-record">
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Emp ID</th>
                        <th scope="col">Designation</th>
                        <th scope="col">School</th>
                        <th scope="col"></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data.map((obj) => {
                        return (
                            <tr key={obj.id}>
                                <input type="checkbox" className="reportCheck"
                                    key={obj.id}
                                    id={obj.id}
                                    value={obj.emp_id}
                                    onChange={handleOnChange} />
                                <th scope="row"> {obj.name} </th>
                                <th> {obj.emp_id} </th>
                                <th> {obj.designation} </th>
                                <th> {obj.school} </th>
                                <td>
                                    <div className="d-grid gap-2 flex justify-content-md-end">
                                        <Modal handleClick={handleClick} show={show}
                                            childElement={<Profile record={currentRecord} />}>
                                        </Modal>
                                        <button
                                            className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                                            size="sm"
                                            color="dark"
                                            onClick={() => {
                                                handleClick(obj);
                                            }}
                                        >
                                            View
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export default FacultyList;
