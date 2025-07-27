import { PenTool } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 ">
      <div className="container mx-auto px-4 py-12 w-[95%] sm:w-[80%] m-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 text-center ">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 ">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <PenTool className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white">InkWell</span>
            </div>
            <p className="text-slate-400 mb-4  text-center md:text-left">
              A place where ideas flow freely. Discover stories, thinking, and
              expertise from writers on any topic that matters to you.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className="hover:text-white transition-colors"
                >
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Writers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-wrap gap-1 items-center justify-center">
            <p className="text-slate-400">© 2025 InkWell. Made with 💙 by </p>
            <a
              target="_blank"
              className="font-bold italic"
              href="https://github.com/krifa-med-aziz"
            >
              Mohamed Aziz Krifa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
