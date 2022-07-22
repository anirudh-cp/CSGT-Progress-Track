import {
    MDBTable,
    MDBTableBody,
} from "mdb-react-ui-kit";


const ConsultancyView = ({ record }) => {

    return (
        <div style={{height:"60vh"}}>
            <h2>Additional Information</h2>

            <div className="wrapper">
                 <MDBTable striped>
                    <MDBTableBody>
                        <tr>
                            <th scope="row" > Company Name </th>
                            <td> {record.company_name} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Type of Consultancy </th>
                            <td> {record.type_of_consultancy} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Start Date </th>
                            <td> {record.consultancy_startdate} </td>
                        </tr>
                        <tr>
                            <th scope="row" > End Date </th>
                            <td> {record.consultancy_enddate} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Funding allocation status </th>
                            <td> {record.Funding} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Amount of funding allocated </th>
                            <td> {record.Amount} </td>
                        </tr>
                        <tr>
                            <th scope="row" > Invoice Number </th>
                            <td> {record.invoice_number} </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable> 
                </div>

        </div>
    )
}

export default ConsultancyView