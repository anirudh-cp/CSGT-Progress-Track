import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useEffect, useState } from "react";
import useFilterStore from "../../API/Stores/FilterStore";

import Modal from "../common/Modal";
import JournalAdd from "./journal/JournalAdd";
import ConferenceAdd from "./conference/ConferenceAdd";
import ChapterAdd from "./chapter/ChapterAdd";
import EditorAdd from "./editor/EditorAdd";


const Filter = ({ setKey, tabIndex }) => {

    const { filterStartDate, filterEndDate, setFilterStartDate, setFilterEndDate } = useFilterStore();
    const [showAdd, setShowAdd] = useState(false);
    const [child, setChild] = useState();

    useEffect(() => {
        setFilterStartDate(new Date());
        setFilterEndDate(new Date());
    }, [])


    const handleClick = () => {
        if (filterStartDate <= filterEndDate) {
            setKey(Date.now());
        }
        else {
            alert("Start date cannot exceed end date.")
            setFilterStartDate(filterEndDate);
        }
    }


    const handleAdd = () => {
        setShowAdd(!showAdd);
        if(tabIndex === 0) {
            setChild(<JournalAdd />);
        }
        else if (tabIndex === 1) {
            setChild(<ConferenceAdd />);
        }
        else if (tabIndex === 4) {
            setChild(<ChapterAdd />)
        }
        else if (tabIndex === 5) {
            setChild(<EditorAdd />)
        }

    }

    return (
        <div className="d-flex justify-content-center pt-3 pb-4">
            <div>
                <span className="pr-3 text-dark">Start Date:</span>
                <DatePicker
                    onChange={setFilterStartDate}
                    value={filterStartDate}
                    className="pb-2 pt-2"
                />
            </div>
            <div>
                <span className="pr-3 pl-3 text-dark">End Date:</span>
                <DatePicker
                    onChange={setFilterEndDate}
                    value={filterEndDate}
                    className="pb-2 pt-2"
                />

            </div>

            <span className="pl-2">
                    <button className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                        size="sm" color="dark" onClick={handleClick}>
                        Filter
                    </button>
                </span>
 
            <div className="d-grid flex justify-content-md-end">
                <Modal handleClick={() => { setShowAdd(!showAdd) }} show={showAdd}
                    childElement={child}></Modal>
                <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-sm mx-2"
                    size="sm" color="dark" onClick={handleAdd}>
                    Add Record
                </button>
            </div>

        </div>

    )
}

export default Filter