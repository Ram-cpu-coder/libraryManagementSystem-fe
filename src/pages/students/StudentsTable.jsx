import React from "react";
import { Button, Table } from "react-bootstrap";

const StudentsTable = ({ students }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentsTable;
