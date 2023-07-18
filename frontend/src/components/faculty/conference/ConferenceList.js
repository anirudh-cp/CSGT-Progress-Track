import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import ConferenceView from "./ConferenceView";
import ConferenceAdd from "./ConferenceAdd";


const ConferenceList = ({ data }) => {
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
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Title</th>
            <th scope="col">Conference</th>
            <th scope="col">Place</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id} onClick={(event) => { event.stopPropagation(); handleClickSelect(obj); }} style={{ cursor: "pointer" }}>
                <th scope="row"> {obj.article_title} </th>
                <th> {obj.conference_name} </th>
                <th> {obj.place} </th>
                <th> {obj.start_date} </th>
                <th> {obj.end_date} </th>
                <td style={{"display": "flex", "justifyContent":"space-around"}}>
                  <div>

                    <Modal
                      handleClick={() => { setShow(false); setShowAdd(false); }}
                      show={show}
                      childElement={<ConferenceView record={currentRecord} />}
                    ></Modal>

                      <Modal handleClick={(event) => { setShowAdd(false); event.stopPropagation(); }} show={showAdd}
                      childElement={<ConferenceAdd key={key} record={currentRecord} />}></Modal>


                    <button
                      className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                      size="sm"
                      color="dark"
                      onClick={(event) => { event.stopPropagation(); handleClickEdit(obj); }}
                    >
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

export default ConferenceList;
