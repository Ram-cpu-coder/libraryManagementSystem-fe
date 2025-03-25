import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { returnBorrowAction } from "../../features/borrows/borrowAction";

const BurrowBlock = ({ borrows, students }) => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("Students", students);
  // return function
  const handleOnReturn = (id) => {
    dispatch(returnBorrowAction(id));
  };
  const borrowingUser = (id) => {
    const userBorrowing = students.find((item) => item._id == id);
    return userBorrowing;
  };

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
                src={`${rootUrl}${item.thumbnail}`}
                alt="thumbnail"
                style={{ height: "70px" }}
              />
            </td>
            <td>{item.title}</td>
            <td>{borrowingUser(item.userId)?.fName || "John"}</td>
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
