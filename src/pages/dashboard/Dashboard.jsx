import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelper";

const Dashboard = () => {
  const authEP = "http://localhost:9001/api/v1/auth";
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const data = await apiProcessor({
      method: "get",
      url: authEP,
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
