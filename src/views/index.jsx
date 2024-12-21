import React from "react";
import OrdersTable from "../components/ordersTable";
import AtGlance from "../components/atGlance";
import Insights from "../components/insights";

export default function homeindex() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <AtGlance />
        <Insights />
        <OrdersTable />
      </div>
    </>
  );
}
