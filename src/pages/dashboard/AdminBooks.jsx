import React from "react";
import Table from "react-bootstrap/Table";

const AdminBooks = ({ books }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {books.map((books, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  src={books.thumbnail}
                  alt="books"
                  style={{ height: "100px" }}
                />
              </td>
              <td>{books.title}</td>
              <td>@mdo</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AdminBooks;
