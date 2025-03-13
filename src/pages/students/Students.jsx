import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const Students = () => {
  const studentsList = useSelector((state) => state.students);
  console.log(1111, studentsList);

  return (
    <UserLayout pageTitle="Students">
      <div>{studentsList}</div>
    </UserLayout>
  );
};

export default Students;
