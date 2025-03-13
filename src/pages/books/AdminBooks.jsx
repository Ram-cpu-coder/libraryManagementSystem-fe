import React, { useEffect } from "react";

import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookAction } from "../../features/books/bookAction";

const AdminBooks = ({ books }) => {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  // const { books } = useSelector((state) => state.books);

  // useEffect(() => {
  //   dispatch(getAllBookAction(true));
  // }, []);
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
