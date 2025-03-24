import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBorrowAction,
  returnBorrowAction,
} from "../../features/borrows/borrowAction";

const MyBooksBlock = ({ borrows }) => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // return function
  const handleOnReturn = (id) => {
    dispatch(returnBorrowAction(id));
    console.log(id);
  };
  console.log(borrows);

  // review funciton
  const handleOnReview = (id) => navigate("/reviews/" + id);

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
                style={{ height: "70px" }}
              />
            </td>
            <td>{item.title}</td>
            <td>{item.dueDate.slice(0, 10)}</td>
            <td>{}</td>
            <td>
              {item.status === "borrowed" ? (
                <Button onClick={() => handleOnReturn(item._id)}>Return</Button>
              ) : (
                <Button variant="warning">Leave Review</Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyBooksBlock;
