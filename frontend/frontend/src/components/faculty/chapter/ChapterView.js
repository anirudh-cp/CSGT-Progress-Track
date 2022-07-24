import {
    MDBTable,
    MDBTableBody,
} from "mdb-react-ui-kit";


const ChapterView = ({ record }) => {

    return (
        <div style={{height:"60vh"}}>
            <h2>Additional Information</h2>

            <div className="wrapper">
                 <MDBTable striped>
                    <MDBTableBody>
                        <tr>
                            <th scope="row" > Chapter title </th>
                            <td> {record.title} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Book title </th>
                            <td> {record.book_title} </td>
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
                            <th scope="row" > ISSN ISBN Number </th>
                            <td> {record.ISSN_ISBN_number} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Type of Publication </th>
                            <td> {record.Type_of_publication} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Publisher Name </th>
                            <td> {record.publisher_name} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Volume Number </th>
                            <td> {record.Vol_no} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Issue Number </th>
                            <td> {record.Issue_no} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Indexing </th>
                            <td> {record.Indexing} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Year </th>
                            <td> {record.year} </td>
                        </tr>
                        <tr>
                            <th scope="row" > DOI </th>
                            <td> {record.DOI} </td>
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

export default ChapterView