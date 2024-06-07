import { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth.js";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Unauth from "../../../pages/Unauth.js";

export default function PrivateRoute() {
  const [ok, setok] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/user-auth"
      );
      if (res.data.ok) {
        setok(true);
      } else {
        setok(false);
      }
    };
    if (auth?.tocken) authCheck();
  }, [auth?.tocken]);
  return ok ? <Outlet /> : <Unauth />;
}
