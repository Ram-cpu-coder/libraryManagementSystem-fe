import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteBorrowAction } from "../../features/borrows/borrowAction";
const BurrowBlock = ({ borrows, students }) => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;

  const dispatch = useDispatch();

  const [deleteBox, setDeleteBox] = useState([false, null]);

  const borrowingUser = (id) => {
    const userBorrowing = students.find((item) => item._id == id);
    return userBorrowing;
  };

  const handleOnDelete = (_id) => {
    dispatch(deleteBorrowAction(_id));
    setDeleteBox([false, null]);
  };

  if (deleteBox[0]) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <p>Are you sure you want to delete?</p>
        <div className="row-custom gap-1 text-center">
          <Button
            variant="secondary"
            className="col-5 custom-btn"
            onClick={() => setDeleteBox([false, null])}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            className="col-5 custom-btn"
            onClick={() => handleOnDelete(deleteBox[1])}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Name</th>
          <th>Taken By</th>
          <th>Due Date</th>
          <th>Returned Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {borrows.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <img
                src={`${rootUrl}${item.thumbnail}`}
                alt="thumbnail"
                style={{ height: "70px", width: "50px" }}
              />
            </td>
            <td>{item.title}</td>
            <td>{borrowingUser(item.userId)?.fName || "John"}</td>
            <td>{item.dueDate.slice(0, 10)}</td>
            <td>
              {item.returnedDate.slice(0, item.returnedDate.indexOf("T"))}
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => setDeleteBox([true, item._id])}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default BurrowBlock;
