import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import BookView from "./BookView";
import BookAdd from  "./BookAdd";


const BookList = ({ data }) => {
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
    <div key="chapter-key">
      <MDBTable striped key="chapter-table-key">
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Book Name</th>
            <th scope="col">Type</th>
            <th scope="col">Indexing</th>
            <th scope="col">Publisher Name</th>
            <th scope="col">Year</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id} onClick={(event) => { event.stopPropagation(); handleClickSelect(obj); }} style={{ cursor: "pointer" }}>
                <th scope="row"> {obj.book_title} </th>
                <th> {obj.type} </th>
                <th> {obj.indexing} </th>
                <th> {obj.publisher_name} </th>
                <th> {obj.year} </th>
                <td style={{"display": "flex", "justifyContent":"space-around"}}>
                  <div>
                    <Modal
                      handleClick={() => { setShow(false); setShowAdd(false); }}
                      show={show}
                      childElement={<BookView record={currentRecord} />}
                    ></Modal>

                    <Modal handleClick={(event) => { setShowAdd(false); event.stopPropagation(); }} show={showAdd}
                      childElement={<BookAdd key={key} record={currentRecord} />}></Modal>

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

export default BookList;
