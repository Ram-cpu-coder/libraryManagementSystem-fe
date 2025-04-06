import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { verifyingUserAction } from "../../features/users/userAction";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState(false);

  const token = searchParams.get("t");
  const sessionId = searchParams.get("sessionId");

  const handleOnActivation = () => {
    console.log("clicked");
    if (sessionId && token) {
      dispatch(verifyingUserAction({ sessionId, token }));
      setStatus(true);
    } else {
      console.error("Missing SessionId and Token");
    }
  };
  useEffect(() => {
    status === true ? navigate("/signin") : "";
  }, [status, navigate]);
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center text-center"
      style={{ minHeight: "500px" }}
    >
      <h1>Click the button to activate your account!</h1>
      <Button variant="primary" onClick={handleOnActivation}>
        Activate
      </Button>
    </div>
  );
};

export default VerificationPage;
