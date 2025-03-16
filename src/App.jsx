import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import PublicBooks from "./pages/books/PublicBooks";
import { Bounce, ToastContainer } from "react-toastify";
import BooksLandingPage from "./pages/books/BooksLandingPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBookAction } from "./features/books/bookAction";
import UpdateBooksAdmin from "./pages/books/UpdateBooksAdmin";
import AddBook from "./pages/books/AddBook";
import HeroPage from "./pages/dashboard/HeroPage";
import { autoLogin, getStudentsAction } from "./features/users/userAction";
import DeleteBook from "./pages/books/DeleteBook";
import Students from "./pages/students/Students";
import Reviews from "./pages/reviews/Reviews";
import MyBooks from "./pages/my-books/MyBooks";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import { getBorrowAction } from "./features/borrows/borrowAction.js";
import Borrows from "./pages/borrows/Borrows";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookAction());
    dispatch(getStudentsAction());
    dispatch(getBorrowAction());
    dispatch(autoLogin());
  }, []);

  return (
    // <PizzaPage />
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        {/* public routes */}

        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="books" element={<PublicBooks />} />
          <Route
            path="books-landing-page/:_id"
            element={<BooksLandingPage />}
          />
        </Route>
        {/* private routes */}

        {/* admin CRUD pages */}
        <Route path="/admin/updateBook/:_id" element={<UpdateBooksAdmin />} />
        <Route path="/admin/addBook" element={<AddBook />} />
        <Route path="/admin/delete/:_id" element={<DeleteBook />} />
        <Route path="/admin" element={<HeroPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/borrows" element={<Borrows />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
