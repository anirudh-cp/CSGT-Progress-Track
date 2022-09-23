import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from "mdb-react-ui-kit";

import { Fragment, useState, useEffect } from "react";
import Modal from "../../common/Modal";
import JournalAdd from "./JournalAdd";
import JournalView from "./JournalView";


const JournalList = ({ data }) => {

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
    <div key="journal-key">
      <MDBTable striped key="journal-table-key">
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Title</th>
            <th scope="col">Journal</th>
            <th scope="col">Year</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <Fragment key={obj.id}>

                <tr onClick={(event) => { event.stopPropagation(); handleClickSelect(obj); }} style={{ cursor: "pointer" }}>
                  <th scope="row"> {obj.article_title} </th>
                  <td> {obj.journal_name} </td>
                  <td> {obj.year} </td>

                  <td >


                    <Modal
                      handleClick={() => { setShow(false); setShowAdd(false); }}
                      show={show}
                      childElement={<JournalView record={currentRecord} />}
                    ></Modal>

                    <Modal handleClick={(event) => { setShowAdd(false); event.stopPropagation(); }} show={showAdd}
                      childElement={<JournalAdd key={key} record={currentRecord} />}></Modal>

                    <button
                      className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                      size="sm"
                      color="dark"
                      onClick={(event) => { event.stopPropagation(); handleClickEdit(obj); }}>
                      <MDBIcon fas icon="pen" />
                    </button>
                    
                  </td>


                </tr>

              </Fragment>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default JournalList;
