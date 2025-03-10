import React from "react";

import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";

const AdminBooks = ({ books, isPrivate }) => {
  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
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
