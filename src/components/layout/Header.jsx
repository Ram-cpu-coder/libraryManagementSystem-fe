import { useDispatch, useSelector } from "react-redux";
import LoggedInHeader from "./LoggedInHeader";
import DefaultHeader from "./DefaultHeader";

const Header = () => {
  const { user } = useSelector((state) => state.users);

  return user?._id ? <LoggedInHeader /> : <DefaultHeader />;
};

export default Header;
