import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography
} from "mdb-react-ui-kit";

export default function FacultyHomeAll() {
    return (
        <div style={{color:"black"}}>
            <div className="pt-2 pb-5">
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
            </div>

            <MDBTable striped>
                <MDBTableHead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">JR</th>
                        <th scope="col">CF</th>
                        <th scope="col">EV</th>
                        <th scope="col">CN</th>
                        <th scope="col">BC</th>
                        <th scope="col">BE</th>
                        <th scope="col">PA</th>
                        <th scope="col">School</th>
                        <th scope="col"></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th scope="row">Rajkumar Arul</th>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>scope</td>
                        <td>
                            <div className="d-grid gap-2 flex justify-content-md-end">
                                <MDBBtn className="mx-2" size="sm" color="dark">
                                    Download
                                </MDBBtn>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Rajkumar Arul</th>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>scope</td>
                        <td>
                            <div className="d-grid gap-2 flex justify-content-md-end">
                                <MDBBtn className="mx-2" size="sm" color="dark">
                                    Download
                                </MDBBtn>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Rajkumar Arul</th>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>scope</td>
                        <td>
                            <div className="d-grid gap-2 flex justify-content-md-end">
                                <MDBBtn className="mx-2" size="sm" color="dark">
                                    Download
                                </MDBBtn>
                            </div>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </div>
    );
}
