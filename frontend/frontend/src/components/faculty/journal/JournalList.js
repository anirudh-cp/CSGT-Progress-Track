import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";


import { useState } from "react";
import Modal from "../../common/Modal";
import JournalView from "./JournalView";


const JournalList = ({ data }) => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show);
    }


    return (
        <div>
            <MDBTable striped>
                <MDBTableHead>
                    <tr key="head-record">
                        <th scope="col">Title</th>
                        <th scope="col">Position</th>
                        <th scope="col">Journal</th>
                        <th scope="col">Year</th>
                        <th scope="col"></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        data.map(obj => {
                            return (<tr key={obj._id}>
                                <th scope="row" > {obj.title} </th>
                                <th> {obj.Author_pos} </th>
                                <th> {obj.Journal_name} </th>
                                <th> {obj.year} </th>
                                <td>
                                    <div className="d-grid gap-2 flex justify-content-md-end">
                                        <Modal handleClick={handleClick} show={show} 
                                        childElement={<JournalView record={obj} />}></Modal>
                                        <button className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                                            size="sm" color="dark" onClick={handleClick}>
                                            View
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        })
                    }

                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default JournalList