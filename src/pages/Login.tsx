import { useNavigate } from "react-router-dom";
import { useUserContext } from "../lib/hooks";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Login() {
  const {
    setLoggedIn,
    users,
    setUsers,
    Login,
    errors,
    setErrors,
    formData,
    setFormData,
    validateSignUpForm,
    handleToggleMode,
    validateLogInForm,
    setCurrentUser,
    LoggedIn,
    userExist,
  } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (LoggedIn) {
      navigate("/posts", { replace: true });
    }
  }, [LoggedIn, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateLogInForm(formData.email, formData.password)) {
      const loggedInUser = userExist(formData.email);
      if (loggedInUser) {
        setCurrentUser(loggedInUser);
        setLoggedIn(true);
        toast.success(`Welcome back ${loggedInUser.name}!`, {
          autoClose: 1000,
        });
      }
      navigate("/posts", { replace: true });
      setFormData({
        id: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        createdAt: "",
      });
      setErrors([]);
      return;
    }

    if (!Login && validateSignUpForm()) {
      setLoggedIn(true);
      const newUser = {
        id: crypto.randomUUID(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString().split("T")[0],
      };
      const newUsers = [...users, newUser];
      setUsers(newUsers);
      setCurrentUser(newUser);
      setFormData({
        id: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        createdAt: "",
      });
      setErrors([]);
      toast.success(`Welcome ${newUser.name}!`, { autoClose: 1000 });
      navigate("/posts", { replace: true });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-lg w-[90%] sm:w-full p-8  rounded-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {Login ? "Log In" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit}>
          {!Login && (
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                autoComplete="name"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              autoComplete={Login ? "current-password" : "new-password"}
              required
            />
          </div>
          {!Login && (
            <div className="mb-4">
              <label
                className="block mb-1 font-medium"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                autoComplete="new-password"
                required
              />
            </div>
          )}

          {errors.length > 0 && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
              {errors.map((error, index) => (
                <p key={index} className="text-red-600 text-sm font-medium">
                  {error}
                </p>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            {Login ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500 text-center">
          {Login ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={handleToggleMode}
            className="text-blue-500 underline cursor-pointer hover:text-blue-700 transition-colors"
          >
            {Login ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
