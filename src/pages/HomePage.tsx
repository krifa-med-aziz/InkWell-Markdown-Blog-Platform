import { ArrowRight, PenTool, Users, Zap } from "lucide-react";
import { PostListItem } from "../components/PostListItem";
import { Link } from "react-router-dom";
import { featuredPosts } from "../utils/data";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="container mx-auto px-4 w-[95%] sm:w-[80%] m-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Welcome to <span className="text-blue-600">InkWell</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              A place where ideas flow freely. Discover stories, thinking, and
              expertise from writers on any topic that matters to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const section = document.getElementById("featured_posts");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg px-8 flex justify-center items-center bg-black text-white gap-3 py-2 rounded-xl cursor-pointer hover:opacity-80"
              >
                Start Reading
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="new-post"
                className="text-lg px-8 py-2 bg-transparent  flex justify-center items-center border border-gray-300 cursor-pointer rounded-xl hover:bg-gray-200"
              >
                Start Writing
                <PenTool className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white w-[95%] sm:w-[80%] m-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 ">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Write with Markdown</h3>
            <p className="text-slate-600">
              Focus on your content with our clean markdown editor and live
              preview.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build Community</h3>
            <p className="text-slate-600">
              Connect with readers and writers who share your interests and
              passions.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Clean</h3>
            <p className="text-slate-600">
              Lightning-fast performance with a distraction-free reading
              experience.
            </p>
          </div>
        </div>
      </section>
      <section id="featured_posts" className="py-16 bg-slate-100 ">
        <div className="max-w-6xl mx-auto px-4 w-[95%] sm:w-[80%] m-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostListItem key={post.id} post={post} featured />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to={"posts"}
              className="text-black bg-transparent border px-8 py-2 rounded-xl m-auto border-gray-200 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-200  w-[65%] md:w-[35%]"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
