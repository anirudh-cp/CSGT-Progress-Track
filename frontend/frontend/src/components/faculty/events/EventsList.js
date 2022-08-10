import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import EventsView from "./EventsView";

const EventsList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentRecord, setCurrentRecord] = useState([]);

  const handleClick = (obj) => {
    setCurrentRecord(obj);
    setShow(!show);
  };

  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Title</th>
            <th scope="col">Event</th>
            <th scope="col">Type</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <th scope="row"> {obj.title} </th>
                <th> {obj.event} </th>
                <th> {obj.type} </th>
                <th> {obj.start_date} </th>
                <th> {obj.end_date} </th>
                <td style={{"display": "flex", "justifyContent":"space-around"}}>
                  <div>
                    <Modal
                      handleClick={handleClick}
                      show={show}
                      childElement={<EventsView record={currentRecord} />}
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

export default EventsList;
