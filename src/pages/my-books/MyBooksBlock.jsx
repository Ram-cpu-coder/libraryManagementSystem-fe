import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddReview from "../reviews/AddReview";
import { returnBorrowAction } from "../../features/borrows/borrowAction";

const MyBooksBlock = ({ borrows, user }) => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;
  const dispatch = useDispatch();
  const [borrow, setBorrow] = useState({});

  // return function
  const handleOnReturn = (id, status) => {
    dispatch(returnBorrowAction(id, status));
  };

  const handleOnReview = (borrowObj) => {
    setBorrow({ ...borrowObj, userName: user.fName });
  };

  return borrow._id ? (
    <div>
      <AddReview borrow={borrow} setBorrow={setBorrow} />
    </div>
  ) : (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Name</th>
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
                style={{ height: "70px" }}
              />
            </td>
            <td>{item.title}</td>
            <td>{item.dueDate.slice(0, 10)}</td>
            <td>{}</td>
            <td>
              {item.status === "borrowed" ? (
                <Button onClick={() => handleOnReturn(item._id, item.status)}>
                  Return
                </Button>
              ) : item.status === "returned" ? (
                <Button variant="warning" onClick={() => handleOnReview(item)}>
                  Leave Review
                </Button>
              ) : (
                <p>Already Reviewed</p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyBooksBlock;
