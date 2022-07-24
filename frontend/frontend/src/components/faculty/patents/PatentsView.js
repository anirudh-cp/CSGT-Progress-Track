import {
    MDBTable,
    MDBTableBody,
} from "mdb-react-ui-kit";


const PatentsView = ({ record }) => {

    return (
        <div style={{height:"60vh"}}>
            <h2>Additional Information</h2>

            <div className="wrapper">
                 <MDBTable striped>
                    <MDBTableBody>
                        <tr>
                            <th scope="row" > Title </th>
                            <td> {record.patent_title} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Type of Consultancy </th>
                            <td> {record.Type_of_patent} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Date of Creation </th>
                            <td> {record.patent_created_date} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Author Position </th>
                            <td> {record.Author_pos} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Number of Authors </th>
                            <td> {record.no_of_authors_in_patent} </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable> 
                </div>

        </div>
    )
}

export default PatentsView