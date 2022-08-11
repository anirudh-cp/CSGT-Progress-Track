import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import ConsultancyView from "./ConsultancyView";
import API from "../../../API/APIService";

const ConsultancyList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentRecord, setCurrentRecord] = useState([]);

  const APIObject = new API();

  const handleClick = (obj) => {
    setCurrentRecord(obj);
    setShow(!show);
  };

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
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <th scope="row"> {obj.company_name} </th>
                <th> {obj.type} </th>
                <th> {obj.start_date} </th>
                <th>
                  {" "}
                  {APIObject.returnDuration(obj.end_date, obj.start_date)}{" "}
                </th>
                <td style={{"display": "flex", "justifyContent":"space-around"}}>
                  <div>
                    <Modal
                      handleClick={handleClick}
                      show={show}
                      childElement={<ConsultancyView record={currentRecord} />}
                    ></Modal>
                    <button
                      className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                      size="sm"
                      color="dark"
                      onClick={() => {
                        handleClick(obj);
                      }}
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default ConsultancyList;
