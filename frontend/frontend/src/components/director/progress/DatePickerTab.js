import DatePicker from "react-date-picker/dist/entry.nostyle";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";


const DatePickerTab = ({ startDate, endDate, setStartDate, setEndDate }) => {
    return (
        <MDBRow className="d-flex justify-content-between pt-3 pb-3" style={{margin: "10px"}}>

            <MDBCol size="col-md-3">
                <span className="pr-3 text-dark">Start Date:</span>
                <DatePicker
                    onChange={setStartDate}
                    value={startDate}
                    className="pb-2 pt-2"
                />
            </MDBCol>


            <MDBCol size="col-md-3 pl-2">
                <span className="pr-3 pl-1 text-dark">End Date:</span>
                <DatePicker
                    onChange={setEndDate}
                    value={endDate}
                    className="pb-2 pt-2"
                />
            </MDBCol>
        </MDBRow>


    )
}

export default DatePickerTab