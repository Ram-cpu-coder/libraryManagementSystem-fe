import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { returnBorrowAction } from "../../features/borrows/borrowAction";

const BurrowBlock = ({ borrows }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // return function
  const handleOnReturn = (id) => {
    dispatch(returnBorrowAction(id));
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
                src={item.thumbnail}
                alt="thumbnail"
                style={{ height: "70px" }}
              />
            </td>
            <td>{item.title}</td>
            <td>Someone</td>
            <td>{item.dueDate.slice(0, 10)}</td>
            <td>{}</td>
            <td>
              <Button>Any Action</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default BurrowBlock;
