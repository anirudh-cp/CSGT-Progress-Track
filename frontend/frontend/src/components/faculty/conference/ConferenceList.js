import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";


import { useState } from "react";
import Modal from "../../common/Modal";
import ConferenceView from "./ConferenceView";


const ConferenceList = ({ data }) => {

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
                        <th scope="col">Conference</th>
                        <th scope="col">Place</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col"></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        data.map(obj => {
                            return (<tr key={obj.id}>
                                <th scope="row" > {obj.title} </th>
                                <th> {obj.Author_pos} </th>
                                <th> {obj.Conference_name} </th>
                                <th> {obj.Conference_startdate} </th>
                                <th> {obj.Conference_enddate} </th>
                                <td>
                                    <div className="d-grid gap-2 flex justify-content-md-end">
                                        <Modal handleClick={handleClick} show={show}
                                            childElement={<ConferenceView record={obj} />}></Modal>
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


    // return (
    //     <div>


    //         <MDBTable striped>
    //             <MDBTableHead>
    //                 <tr>
    //                     <th scope="col">Title</th>
    //                     <th scope="col">Position</th>
    //                     <th scope="col">Conference</th>
    //                     <th scope="col">Place</th>
    //                     <th scope="col">Date</th>
    //                     <th scope="col"></th>
    //                 </tr>
    //             </MDBTableHead>
    //             <MDBTableBody>
    //                 <tr className="">
    //                     <th scope="row">
    //                         A novel privacy preservation scheme for internet of things using
    //                         blockchain strategy
    //                     </th>
    //                     <td>2</td>
    //                     <td>
    //                         International Conference on Communication, Computing and Electronics
    //                         Systems
    //                     </td>
    //                     <td>Singapore</td>
    //                     <td>Oct, 2020</td>
    //                     <td>
    //                         <div className="d-grid gap-2 flex justify-content-md-end">
    //                             <MDBBtn className="mx-2" size="sm" color="dark">
    //                                 View
    //                             </MDBBtn>
    //                         </div>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th scope="row">
    //                         A novel privacy preservation scheme for internet of things using
    //                         blockchain strategy
    //                     </th>
    //                     <td>2</td>
    //                     <td>
    //                         International Conference on Communication, Computing and Electronics
    //                         Systems
    //                     </td>
    //                     <td>Singapore</td>
    //                     <td>Oct, 2020</td>
    //                     <td>
    //                         <div className="d-grid gap-2 flex justify-content-md-end">
    //                             <MDBBtn className="mx-2" size="sm" color="dark">
    //                                 View
    //                             </MDBBtn>
    //                         </div>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th scope="row">
    //                         A novel privacy preservation scheme for internet of things using
    //                         blockchain strategy
    //                     </th>
    //                     <td>2</td>
    //                     <td>
    //                         International Conference on Communication, Computing and Electronics
    //                         Systems
    //                     </td>
    //                     <td>Singapore</td>
    //                     <td>Oct, 2020</td>
    //                     <td>
    //                         <div className="d-grid gap-2 flex justify-content-md-end">
    //                             <MDBBtn className="mx-2" size="sm" color="dark">
    //                                 View
    //                             </MDBBtn>
    //                         </div>
    //                     </td>
    //                 </tr>
    //             </MDBTableBody>
    //         </MDBTable>
    //     </div>
    // )
}

export default ConferenceList