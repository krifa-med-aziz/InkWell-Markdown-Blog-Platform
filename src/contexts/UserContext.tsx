import { createContext } from "react";
import type { TFormData, TUser } from "../lib/type";

type UserContextType = {
  currentUser: TUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  LoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  users: TUser[];
  setUsers: React.Dispatch<React.SetStateAction<TUser[]>>;
  Login: boolean;
  errors: string[];
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  formData: TFormData;
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>;
  validateSignUpForm: () => boolean;
  handleToggleMode: () => void;
  userExist: (email: string) => TUser | undefined;
  validateLogInForm: (email: string, password: string) => boolean;
};

export const UserContext = createContext<UserContextType | null>(null);
