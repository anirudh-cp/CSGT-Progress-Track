import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import PatentsView from "./PatentsView";
import API from "../../../API/APIService";

const PatentsList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentRecord, setCurrentRecord] = useState([]);

  const handleClick = (obj) => {
    setCurrentRecord(obj);
    setShow(!show);
  };

  return (
    <div key="patents-key">
      <MDBTable striped key="patents-table-key">
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Position</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <th scope="row"> {obj.patent_title} </th>
                <th> {obj.type} </th>
                <th> {obj.filed_date} </th>
                <th> {obj.published_date} </th>
                <th> {obj.granted_date} </th>
                <td>
                  <div className="d-grid gap-2 flex justify-content-md-end">
                    <Modal
                      handleClick={handleClick}
                      show={show}
                      childElement={<PatentsView record={currentRecord} />}
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

export default PatentsList;
