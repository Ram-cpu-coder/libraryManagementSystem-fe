import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import HeroPage from "./HeroPage";
import { userDataAction } from "../../features/users/userAction";
import { fetchAdminLevelBooksAction } from "../../features/books/bookAction";
import CustomInput from "../../components/custom-input/CustomInput";
import { bookUpdateInputFields } from "../../assets/form-data/UserAuthInput";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const { form, handleOnChange } = useForm({});

  const handleOnSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // login action
    // dispatch(loginAction(form, navigate));
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(userDataAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAdminLevelBooksAction());
  }, [dispatch]);
  return (
    <div className="d-flex">
      <SideBar />
      {bookStore.isUpdate == true ? (
        <div className="w-100 d-flex flex-column my-5 min-vh-100 align-items-center justify-content-center">
          <h1>Update Book!</h1>
          <Form
            onSubmit={handleOnSubmit}
            className="d-flex align-items-center flex-column col-6"
          >
            {bookUpdateInputFields.map((item, index) => {
              return (
                <CustomInput
                  key={index}
                  {...item}
                  onChange={handleOnChange}
                  className="mb-3"
                />
              );
            })}
            <Button type="submit" className="mt-4 w-100">
              Sign In
            </Button>
          </Form>
        </div>
      ) : (
        <HeroPage />
      )}
    </div>
  );
};

export default Dashboard;
