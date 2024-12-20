import React from "react";
import OrdersTable from "../components/ordersTable";
import { Button } from "@/components/ui/button"

export default function homeindex() {
  return (
    <>
      <div>
        <OrdersTable />
        <Button>Click me</Button>

      </div>
    </>
  );
}
