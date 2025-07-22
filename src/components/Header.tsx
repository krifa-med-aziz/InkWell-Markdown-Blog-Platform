import { Bookmark, PenTool, Text, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className=" bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50  m-auto shadow-sm">
      <div className="container mx-auto px-4 w-[95%] sm:w-[80%] m-auto">
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
            <button className="cursor-pointer">
              <User className="h-5 w-5" />
            </button>
            <Link
              to="new-post"
              className="cursor-pointer flex items-center justify-center gap-2 bg-black text-white rounded-[5px] p-2"
            >
              <PenTool className=" h-4 w-4" />
              Write
            </Link>
          </div>
          <div className="md:hidden">
            <DropDownMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function DropDownMenu() {
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

          <form action="#" method="POST">
            <MenuItem>
              <Link
                to="/login"
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Sign In
              </Link>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
