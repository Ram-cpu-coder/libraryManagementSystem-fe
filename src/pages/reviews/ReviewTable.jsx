import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ReviewTable = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  //   const reviewingUser = user.find((item)=>item._id == userId)

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Book</th>
          <th>User</th>
          <th>Review</th>
          <th>User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReviewTable;
