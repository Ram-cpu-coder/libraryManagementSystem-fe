import React from "react";

import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";
import { useSelector } from "react-redux";

const AdminBooks = ({ books, isPrivate }) => {
  const userStore = useSelector((state) => state.users);
  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th
            style={{
              display: userStore.user.role === "admin" ? "block" : "none",
            }}
          >
            Status
          </th>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <BooksTable books={books} isPrivate={isPrivate} />
    </Table>
  );
};

export default AdminBooks;
