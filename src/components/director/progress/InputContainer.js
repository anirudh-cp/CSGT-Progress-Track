import React from 'react'
import { MDBCol, MDBRow, MDBCheckbox } from "mdb-react-ui-kit";

const InputContainer = ({ data, setOut }) => {

    const handleOnChange = (event) => {
        const { checked, value } = event.currentTarget;

        setOut(
            prev => checked
                ? [...prev, value]
                : prev.filter(val => val !== value)
        );

    }

    return (
        <MDBRow style={{ margin: "15px" }}>
            {data.map((obj, index) => {
                return (
                    <MDBCol className="d-flex justify-content-between" key={`custom-checkbox-col-${index}`}>
                        <MDBCheckbox
                            key={`custom-checkbox-${index}`}
                            id={`custom-checkbox-${index}`}
                            label={obj}
                            value={obj}
                            onChange={handleOnChange}
                            defaultChecked
                        />               
                    </MDBCol>)
            })}
        </MDBRow>
    )
}

export default InputContainer