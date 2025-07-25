import { useRef } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../lib/hooks";

export default function AuthRequired() {
  const { LoggedIn } = useUserContext();
  const hasShownToast = useRef(false);
  const location = useLocation();

  if (!LoggedIn) {
    if (!hasShownToast.current) {
      toast.warn("You must login first!");
      hasShownToast.current = true;
    }
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace={true}
      />
    );
  }
  return <Outlet />;
}
