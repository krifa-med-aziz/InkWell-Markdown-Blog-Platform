import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            About InkWell
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We believe that everyone has a story worth telling. InkWell is a
            platform where writers can share their thoughts, experiences, and
            expertise with a community that values quality content and
            meaningful conversations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To create a space where ideas can flourish, where writers can
                focus on their craft, and where readers can discover content
                that inspires, educates, and entertains.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're building more than just a blogging platform – we're
                cultivating a community of thinkers, creators, and learners who
                believe in the power of the written word.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Quality Writing
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Focus on craft, not complexity
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Community First
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Building connections through stories
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Innovation</h3>
                    <p className="text-slate-600 text-sm">
                      Modern tools for timeless art
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a seasoned writer or just starting your journey,
            InkWell is the perfect place to share your voice with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-around">
            <Link
              to="/posts"
              className="text-lg px-8 text-black bg-white rounded-[5px] py-2 max-w-[80%] m-auto cursor-pointer font-semibold"
            >
              Start Writing Today
            </Link>
            <button className="flex  items-center justify-center py-2 max-w-[80%] m-auto text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent rounded-[5px] cursor-pointer">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
