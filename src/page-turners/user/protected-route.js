import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk } from "../services/auth-thunks";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const load = async () => {
      const userId = localStorage.getItem("userId");
      const { payload } = await dispatch(profileThunk(userId));
      if (!payload) {
        navigate("/login");
      }
      setLoading(false);
    };
    load();
  }, []);
  return <div className={`${loading ? "d-none" : ""}`}>{children}</div>;
}
export default ProtectedRoute;
