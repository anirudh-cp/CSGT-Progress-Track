import React, { useEffect, useState } from "react";

import API from '../../../API/APIService'
import ConferenceList from "./ConferenceList";
import Loading from "../../common/Loading";
import EmptyResults from "../../common/EmptyResults"

import useUserStore from "../../../API/Stores/UserStore";
import useFilterStore from "../../../API/Stores/FilterStore";


export default function Conference() {
  const APIObject = new API();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { filterStartDate, filterEndDate } = useFilterStore();
  const {token } = useUserStore();
  var strftime = require('strftime');

  const GetAPI = async () => {
    setLoad(true);
    console.log(strftime("%Y-%m-%d", filterStartDate), strftime("%Y-%m-%d", filterEndDate));
    const response = await APIObject.getPublicationsData(token, "conference",
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
        (data.length === 0) ? <EmptyResults /> : <ConferenceList data={data} />
      )
      }
    </div>

  );
}
