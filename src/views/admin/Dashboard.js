import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardLineChart2 from "components/Cards/CardLineChart2.js";

const ENDPOINT = "http://localhost:5001";

export default function Dashboard() {

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("esprender", data => {
      console.log(data)
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart2 />
        </div>
      </div>
    </>
  );
}
