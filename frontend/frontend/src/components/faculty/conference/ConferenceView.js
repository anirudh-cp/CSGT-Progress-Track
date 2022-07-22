import {
    MDBTable,
    MDBTableBody,
} from "mdb-react-ui-kit";


const ConferenceView = ({ record }) => {
    return (
        <div style={{height:"60vh"}}>
            <h2>Additional Information</h2>

            <div className="wrapper">
                 <MDBTable striped>
                    <MDBTableBody>
                        <tr>
                            <th scope="row" > Title </th>
                            <td> {record.title} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Conference </th>
                            <td> {record.Conference_name} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Conference location </th>
                            <td> {record.Place_of_conference} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Type of conference </th>
                            <td> {record.Type} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Designation </th>
                            <td> {record.Designation} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Number of Authors </th>
                            <td> {record.no_of_authors} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Author Position </th>
                            <td> {record.Author_pos} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Collaboration </th>
                            <td> {record.Collaboration} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Type of Publication </th>
                            <td> {record.Type_of_publication} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Start Date </th>
                            <td> {record.Conference_startdate} </td>
                        </tr>
                        <tr>
                            <th scope="row" > End Date </th>
                            <td> {record.Conference_enddate} </td>
                        </tr>
                        <tr>
                            <th scope="row" > DOI </th>
                            <td> {record.DOI} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Indexed in SCOPUS? </th>
                            <td> {record.Indexed_Scopus} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Funder Name </th>
                            <td> {record.Funder_name} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Amount of Publication </th>
                            <td> {record.Amount_of_Publication} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Support received status </th>
                            <td> {record.Support} </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable> 
                </div>

        </div>
    )
}

export default ConferenceView