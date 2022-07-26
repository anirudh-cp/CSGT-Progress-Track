import DatePicker from "react-date-picker/dist/entry.nostyle";
import React, { useEffect } from "react";
import useFilterStore from "../../API/Stores/FilterStore";


const Filter = ({ setKey }) => {

    const { filterStartDate, filterEndDate, setFilterStartDate, setFilterEndDate } = useFilterStore();

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

                <span className="pl-2">
                    <button className="ripple ripple-surface ripple-surface-light btn btn-dark btn-sm mx-2"
                        size="sm" color="dark" onClick={handleClick}>
                        Filter
                    </button>
                </span>
            </div>
        </div>

    )
}

export default Filter