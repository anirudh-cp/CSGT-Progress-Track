import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import PatentsView from "./PatentsView";
import PatentsAdd from "./PatentsAdd";
import API from "../../../API/APIService";

const PatentsList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [key, setKey] = useState(0);

  const [currentRecord, setCurrentRecord] = useState([]);

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
    <div key="patents-key">
      <MDBTable striped key="patents-table-key">
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Filed Date</th>
            <th scope="col">Published Date</th>
            <th scope="col">Granted Date</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id} onClick={(event) => { event.stopPropagation(); handleClickSelect(obj); }} style={{ cursor: "pointer" }}>
                <th scope="row"> {obj.title} </th>
                <th> {obj.type} </th>
                <th> {obj.filed_date} </th>
                <th> {obj.published_date} </th>
                <th> {obj.granted_date} </th>
                <td style={{"display": "flex", "justifyContent":"space-around"}}>
                  <div>
                    <Modal
                      handleClick={() => { setShow(false); setShowAdd(false); }}
                      show={show}
                      childElement={<PatentsView record={currentRecord} />}
                    ></Modal>
                    
                    <Modal handleClick={(event) => { setShowAdd(false); event.stopPropagation(); }} show={showAdd}
                      childElement={<PatentsAdd key={key} record={currentRecord} />}></Modal>

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

export default PatentsList;
