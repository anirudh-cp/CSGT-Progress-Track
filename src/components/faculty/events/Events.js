import React, { useEffect, useState } from "react";

import API from '../../../API/APIService'
import EventsList from "./EventsList";
import Loading from "../../common/Loading";
import EmptyResults from "../../common/EmptyResults"

import useUserStore from "../../../API/Stores/UserStore";
import useFilterStore from "../../../API/Stores/FilterStore";


export default function Events() {
  const APIObject = new API();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { filterStartDate, filterEndDate } = useFilterStore();
  const { token, empID } = useUserStore();
  var strftime = require('strftime');

  const GetAPI = async () => {
    setLoad(true);
    console.log(strftime("%Y-%m-%d", filterStartDate), strftime("%Y-%m-%d", filterEndDate));
    const response = await APIObject.getData(token, empID, "event",
      strftime("%Y-%m-%d", filterStartDate), strftime("%Y-%m-%d", filterEndDate)).then(response => {
        setData(response);
      }).catch(error => console.log(error));
    setLoad(false);
  }

  useEffect(() => {
    GetAPI();
  }, [])



  return (
    <div>
      {load ? <Loading /> : (
        (data.length === 0) ? <EmptyResults /> : <EventsList data={data} />
      )
      }
    </div>

  );
}
