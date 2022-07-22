import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";


import { useState } from "react";
import Modal from "../../common/Modal";
import ConsultancyView from './ConsultancyView'
import API from "../../../API/APIService";


const ConsultancyList = ({ data }) => {

    const [show, setShow] = useState(false)

    const APIObject = new API();

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div key="consultancy-key">
            <MDBTable striped key="consultancy-table-key">
                <MDBTableHead>
                    <tr key="head-record">
                        <th scope="col">Company</th>
                        <th scope="col">Type</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Duration</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        data.map(obj => {
                            return (<tr key={obj.id}>
                                <th scope="row" > {obj.company_name} </th>
                                <th> {obj.type_of_consultancy} </th>
                                <th> {obj.consultancy_startdate} </th>
                                <th> {
                                    APIObject.returnDuration(obj.consultancy_enddate, obj.consultancy_startdate)
                                } </th>
                                <td>
                                    <div className="d-grid gap-2 flex justify-content-md-end">
                                        <Modal handleClick={handleClick} show={show}
                                            childElement={<ConsultancyView record={obj} />}></Modal>
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

export default ConsultancyList