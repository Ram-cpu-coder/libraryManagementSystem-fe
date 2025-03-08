import React from "react";

import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";

const AdminBooks = ({ books }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <BooksTable books={books} />
    </Table>
  );
};

export default AdminBooks;
