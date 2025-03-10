import { useDispatch, useSelector } from "react-redux";
import LoggedInHeader from "./LoggedInHeader";
import DefaultHeader from "./DefaultHeader";

const Header = () => {
  // const dispatch = useDispatch();
  const userStore = useSelector((state) => state.users);

  return userStore.isLoggedIn ? <LoggedInHeader /> : <DefaultHeader />;
};

export default Header;
