import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import ConsultancyView from "./ConsultancyView";
import ConsultancyAdd from  "./ConsultancyAdd"
import API from "../../../API/APIService";

const ConsultancyList = ({ data }) => {

  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [currentRecord, setCurrentRecord] = useState([]);
  const [key, setKey] = useState(0);

  const APIObject = new API();

  const handleClickSelect = (obj) => {
    setCurrentRecord(obj);
    setShow(!show);
  };

  const handleClickEdit = (obj) => {
    setCurrentRecord(obj);
    setKey(key + 1);
    setShowAdd(true);
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
          {data.map((obj) => {
            return (
              <tr key={obj.id} onClick={(event) => { event.stopPropagation(); handleClickSelect(obj); }} style={{ cursor: "pointer" }}>
                <th scope="row"> {obj.company_name} </th>
                <th> {obj.type} </th>
                <th> {obj.start_date} </th>
                <th>
                  {APIObject.returnDuration(obj.end_date, obj.start_date)}
                </th>
                <td style={{ "display": "flex", "justifyContent": "space-around" }}>
                  <div>
                    
                    <Modal
                      handleClick={() => {setShow(false); setShowAdd(false);}}
                      show={show}
                      childElement={<ConsultancyView record={currentRecord} />}
                    ></Modal>
                    
                    <Modal handleClick={(event) => { setShowAdd(false); event.stopPropagation(); }} show={showAdd}
                      childElement={<ConsultancyAdd key={key} record={currentRecord} />}></Modal>

                    <button
                      className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                      size="sm"
                      color="dark"
                      onClick={(event) => { event.stopPropagation(); handleClickEdit(obj); }}>
                      <MDBIcon fas icon="pen" />
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
