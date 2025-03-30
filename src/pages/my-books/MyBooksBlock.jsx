import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { returnBorrowAction } from "../../features/borrows/borrowAction";

const MyBooksBlock = ({ borrows, user, setBorrow }) => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;
  const dispatch = useDispatch();

  // return function
  const handleOnReturn = (id, status) => {
    dispatch(returnBorrowAction(id, status));
  };

  console.log(borrows);

  const handleOnReview = (borrowObj) => {
    setBorrow({
      ...borrowObj,
      userName: user.fName,
    });
  };

  return (
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
                style={{ height: "70px", width: "50px" }}
              />
            </td>
            <td>{item.title}</td>
            <td>{item.dueDate.slice(0, 10)}</td>
            <td>
              {item.returnedDate?.slice(0, item.returnedDate.indexOf("T")) ||
                "YYYY/MM/DD"}
            </td>
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
