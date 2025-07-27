import { Bookmark, LogOut, PenTool, Text, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { LoggedIn, setLoggedIn, currentUser, setCurrentUser } =
    useUserContext();
  return (
    <header className=" bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50  m-auto shadow-sm">
      <div className="container mx-auto px-4 w-[95%] sm:w-[85%] m-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <PenTool className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">InkWell</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </Link>
              <Link
                to="/posts"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Posts
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex  items-center space-x-4">
            <Link to="posts/my-bookmarks ">
              <div className="flex items-center justify-center gap-2">
                <Bookmark className="h-5 w-5 cursor-pointer" />
                <p>Library</p>
              </div>
            </Link>
            {LoggedIn && currentUser ? (
              <p className="text-lg border border-gray-300 rounded-3xl px-2 py-1 ">
                {getAuthorInitials(currentUser.name)}
              </p>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => navigate("/login", { replace: true })}
              >
                <User className="h-5 w-5" />
              </button>
            )}

            {LoggedIn && (
              <LogOut
                onClick={() => {
                  setLoggedIn(false);
                  setCurrentUser(null);
                  toast.info("Logged Out!", {
                    autoClose: 1000,
                    className:
                      "!text-sm !w-[70%] !mt-8 sm:!text-base sm:!w-[400px] sm:!mt-4",
                  });
                }}
                className="h-5 w-5 cursor-pointer"
              />
            )}

            <Link
              to="new-post"
              className="cursor-pointer flex items-center justify-center gap-2 bg-black text-white rounded-[5px] p-2"
            >
              <PenTool className=" h-4 w-4" />
              Write
            </Link>
          </div>
          <div className="md:hidden flex gap-1">
            <Link
              to="new-post"
              className="cursor-pointer flex items-center justify-center gap-2 bg-black text-white rounded-[5px] p-2"
            >
              <PenTool className=" h-4 w-4" />
              Write
            </Link>
            <DropDownMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useUserContext } from "../lib/hooks";
import { getAuthorInitials } from "../utils/getAuthorInitials ";
import { toast } from "react-toastify";

export default function DropDownMenu() {
  const { LoggedIn, setLoggedIn, currentUser } = useUserContext();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs  ">
          <Text />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {LoggedIn && (
          <p className="px-4 py-2">
            Hi <span className="font-bold">{currentUser?.name}</span>
          </p>
        )}
        <div className="py-1">
          <MenuItem>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/posts"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Posts
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/posts/my-bookmarks"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              My library
            </Link>
          </MenuItem>

          <form action="#" method="POST">
            <MenuItem>
              <Link
                to="/login"
                onClick={() => setLoggedIn(false)}
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-red-600 data-focus:bg-red-600  data-focus:text-white data-focus:outline-hidden"
              >
                {LoggedIn ? "Sign Out" : "Log In"}
              </Link>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
