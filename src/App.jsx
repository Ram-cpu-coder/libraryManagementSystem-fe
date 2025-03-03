import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import UserLayout from "./components/layout/UserLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import PublicBooks from "./pages/books/PublicBooks";
import { Bounce, ToastContainer } from "react-toastify";
import PizzaPage from "./pages/PizzaPage";

function App() {
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
        </Route>
        {/* private routes */}

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
