import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { deleteUserAction } from "../../features/users/userAction";
import { useDispatch } from "react-redux";

const StudentsTable = ({ students }) => {
  const [deleteBox, setDeleteBox] = useState([false, null]);

  const dispatch = useDispatch();
  // delete function
  const handleOnDelete = (_id) => {
    console.log(_id);
    dispatch(deleteUserAction(_id));
    setDeleteBox([false, null]);
  };

  if (deleteBox[0] === true) {
    return (
      <div
        className="w-100 d-flex flex-column align-items-center"
        style={{ minHeight: "300px" }}
      >
        <p>Are you sure to Delete?</p>
        <div className="row  d-flex justify-content-between w-50">
          <Button
            variant="secondary"
            onClick={() => setDeleteBox([false, null])}
            className="col-5 row-custom custom-btn custom-btn:hover px-3"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleOnDelete(deleteBox[1])}
            className="col-5 row-custom custom-btn custom-btn:hover px-3"
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "300px" }} className="table-responsive">
      <p>{students?.length} student(s) Found !</p>
      {students?.length > 0 ? (
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.fName}</td>
                <td>{item.lName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
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
      ) : (
        ""
      )}
    </div>
  );
};

export default StudentsTable;
