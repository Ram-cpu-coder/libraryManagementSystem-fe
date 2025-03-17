import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsAction } from "../../features/users/userAction";
import StudentsTable from "./StudentsTable";

const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getStudentsAction());
  }, []);
  console.log(1111, students);
  return (
    <UserLayout pageTitle="Students">
      <div className="w-100">
        <StudentsTable students={students} />
      </div>
    </UserLayout>
  );
};

export default Students;
