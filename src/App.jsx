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
import {
  autoLogin,
  getAllUsers,
  getStudentsAction,
  userDataAction,
} from "./features/users/userAction";
import DeleteBook from "./pages/books/DeleteBook";
import Students from "./pages/students/Students";
import Reviews from "./pages/reviews/Reviews";
import MyBooks from "./pages/my-books/MyBooks";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Borrows from "./pages/borrows/Borrows";
import UserReview from "./pages/reviews/UserReview";
import { fetchPublicReviewsAction } from "./features/reviews/reviewsAction";
import VerificationPage from "./pages/verificationPage/VerificationPage";
import ForgotPasswordPage from "./pages/verificationPage/ForgotPasswordPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataAction());
    dispatch(getAllBookAction());
    dispatch(getStudentsAction());
    dispatch(autoLogin());
    dispatch(getAllUsers());
    dispatch(fetchPublicReviewsAction());
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
          <Route path="verify-user" element={<VerificationPage />} />
          <Route path="forgotPassword" element={<ForgotPasswordPage />} />
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

        <Route path="/students" element={<Students />} />
        <Route path="/borrows" element={<Borrows />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/my-books" element={<MyBooks />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/userReviews" element={<UserReview />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<HeroPage />} />
      </Routes>
    </>
  );
}

export default App;
