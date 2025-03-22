import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsAction } from "../../features/users/userAction";
import StudentsTable from "./StudentsTable";

const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.users);
  console.log(students);
  const [searchedData, setSearchedData] = useState([]);
  const [displayStudents, setdisplayStudents] = useState([]);

  const handleOnSearch = (e) => {
    setSearchedData(e.target.value);
    const filteredData = students.filter((item) => {
      return (
        item.fName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.lName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setdisplayStudents(filteredData);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      await dispatch(getStudentsAction());
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    setdisplayStudents(students);
  }, [students]);
  // console.log(1111, students);
  return (
    <UserLayout pageTitle="Students">
      <div className="w-100">
        <div className="d-flex justify-content-end">
          <input
            type="search"
            name="search"
            id="search"
            className="mb-3 rounded p-1 "
            placeholder="Search Students ..."
            value={searchedData}
            onChange={handleOnSearch}
          />
        </div>
        <p>{displayStudents?.length} student(s) Found !</p>
        <StudentsTable students={displayStudents} />
      </div>
    </UserLayout>
  );
};

export default Students;
