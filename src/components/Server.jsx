import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDustData } from "../store/dustReducer/dust";

const getParameters = {
  serviceKey:
    "A%2BzIqxrKlXuKprsFurGTd%2FfNW%2BqEfUFK%2BbloQg22eqhtEBh73PGd2v3jMMz44U%2FodqLtRtDXNlmstF%2BAw%2BBQFw%3D%3D",
  returnType: "json",
  numOfRows: "100",
  pageNo: "1",
  sidoName: "서울",
  ver: "1.0",
};

function Server() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get(
      "/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
      { params: getParameters }
    );
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
    dispatch(getDustData());
  }, []);

  return <div>Server</div>;
}

export default Server;
