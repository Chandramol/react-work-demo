import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProdutsTable() {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch data from the fake API
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Methos to sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  const sortedProducts = [...products].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Method to Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(paginatedProducts, "paginatedProducts");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <Table className="border-2 border-[#DCDFE4] rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead
              className="w-[150px] cursor-pointer"
              onClick={() => handleSort("product")}
            >
              Product
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Date
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("timeSpent")}
            >
              Time Spent
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("orderValue")}
            >
              Order Value
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("commission")}
            >
              Commission
            </TableHead>
            <TableHead>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="flex items-center space-x-2">
                <img
                  src={product.productImage}
                  alt="Product"
                  className="w-10 h-10 object-cover rounded"
                />
                <span className="truncate">{product.product}</span>
              </TableCell>
              <TableCell>{product.date}</TableCell>
              <TableCell>{product.timeSpent}</TableCell>
              <TableCell>{product.orderValue}</TableCell>
              <TableCell>{product.commission}</TableCell>
              <TableCell>
                <NavLink to="/chats" className="flex items-center justify-end text-[#71719E]">
                  View chats <ArrowUpRight size={14} />
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-center items-center space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProdutsTable;
