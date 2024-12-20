import React from "react";

function ordersTable() {
  return (
    <>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Time Spent</th>
            <th className="border border-gray-300 px-4 py-2">Order Value</th>
            <th className="border border-gray-300 px-4 py-2">Commission</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Malcolm Lockyer
            </td>
            <td className="border border-gray-300 px-4 py-2">1961</td>
            <td className="border border-gray-300 px-4 py-2">1961</td>
            <td className="border border-gray-300 px-4 py-2">1961</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
              Another Product
            </td>
            <td className="border border-gray-300 px-4 py-2">John Doe</td>
            <td className="border border-gray-300 px-4 py-2">2023</td>
            <td className="border border-gray-300 px-4 py-2">$500</td>
            <td className="border border-gray-300 px-4 py-2">$50</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ordersTable;
