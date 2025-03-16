import React, { useEffect } from "react";

import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";
import { useSelector } from "react-redux";

const AdminBooks = ({ books }) => {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      <Table hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th
              style={{
                display: user.role === "admin" ? "" : "none",
              }}
            >
              Status
            </th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <BooksTable isPrivate={true} books={books} />
      </Table>
    </div>
  );
};

export default AdminBooks;
