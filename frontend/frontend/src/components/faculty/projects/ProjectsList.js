import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import PatentsView from "./ProjectsView";

const ProjectsList = ({ data }) => {
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
            <th scope="col">Funding Agency</th>
            <th scope="col">Amount Registered</th>
            <th scope="col">Start date</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <th scope="row"> {obj.title} </th>
                <th> {obj.funding_agency} </th>
                <th> {obj.amount_registered} </th>
                <th> {obj.start_date} </th>
                <td style={{"display": "flex", "justifyContent":"space-around"}}>
                  <div>
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

export default ProjectsList;
