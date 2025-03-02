import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelper";

const Dashboard = () => {
  const authEP = import.meta.env.VITE_API_BASE_URL;
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const data = await apiProcessor({
      method: "get",
      url: authEP + "/auth",
      isPrivate: true,
      isRefreshToken: false,
    });
    console.log(data);
    if (data && data.status == "success") {
      setUser(data.user);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      hello
      <h1>{user.fName}</h1>
    </div>
  );
};

export default Dashboard;
