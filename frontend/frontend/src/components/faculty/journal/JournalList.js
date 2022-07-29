import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";


import { useState } from "react";
import Modal from "../../common/Modal";
import JournalView from "./JournalView";
import JournalAdd from "./JournalAdd";


const JournalList = ({ data }) => {

    const [show, setShow] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [currentRecord, setCurrentRecord] = useState([])

    const handleClick = (obj) => {
        setCurrentRecord(obj);
        setShow(!show);
    }

    return (
        <div key="journal-key">
            <MDBTable striped key="journal-table-key">
                <MDBTableHead>
                    <tr key="head-record">
                        <th scope="col">Title</th>
                        <th scope="col">Position</th>
                        <th scope="col">Journal</th>
                        <th scope="col">Year</th>
                        <th scope="col">
                            <div className="d-grid flex justify-content-md-end">
                                <Modal handleClick={() => {setShowAdd(!showAdd)}} show={showAdd}
                                    childElement={<JournalAdd />}></Modal>
                                <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-sm mx-2"
                                    size="sm" color="dark" onClick={() => {setShowAdd(!showAdd); console.log("Add")}}>
                                    Add Record
                                </button>
                            </div>   
                        </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        data.map(obj => {
                            return (<tr key={obj.id}>
                                <th scope="row" > {obj.title} </th>
                                <th> {obj.Author_pos} </th>
                                <th> {obj.Journal_name} </th>
                                <th> {obj.year} </th>
                                <td>
                                    <div className="d-grid gap-2 flex justify-content-md-end">
                                        <Modal handleClick={handleClick} show={show}
                                            childElement={<JournalView record={currentRecord} />}></Modal>
                                        <button className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                                            size="sm" color="dark" onClick={() => { handleClick(obj) }}>
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