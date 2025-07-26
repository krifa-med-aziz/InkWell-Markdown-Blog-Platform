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
      toast.warn("You must login first!", {
        autoClose: 1000,
        className:
          "!text-sm !w-[70%] !mt-8 sm:!text-base sm:!w-[400px] sm:!mt-4",
      });
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
