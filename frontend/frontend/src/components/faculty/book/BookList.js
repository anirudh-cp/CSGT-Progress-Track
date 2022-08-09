import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { useState } from "react";
import Modal from "../../common/Modal";
import BookView from "./BookView";

const BookList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentRecord, setCurrentRecord] = useState([]);

  const handleClick = (obj) => {
    setCurrentRecord(obj);
    setShow(!show);
  };

  return (
    <div key="chapter-key">
      <MDBTable striped key="chapter-table-key">
        <MDBTableHead>
          <tr key="head-record">
            <th scope="col">Chapter</th>
            <th scope="col">Book</th>
            <th scope="col">Indexing</th>
            <th scope="col">Publisher</th>
            <th scope="col">Year</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <th scope="row"> {obj.book_title} </th>
                <th> {obj.chapter_title} </th>
                <th> {obj.indexing} </th>
                <th> {obj.publisher_name} </th>
                <th> {obj.year} </th>
                <td>
                  <div className="d-grid gap-2 flex justify-content-md-end">
                    <Modal
                      handleClick={handleClick}
                      show={show}
                      childElement={<BookView record={currentRecord} />}
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

export default BookList;
