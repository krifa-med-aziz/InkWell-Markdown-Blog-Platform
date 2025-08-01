import { useState, useEffect, useRef } from "react";
import { useBlogPostsContext, useUserContext } from "../lib/hooks";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function PostForm() {
  const { blogPosts, setBlogPosts, getPostById } = useBlogPostsContext();
  const { id } = useParams();
  const post = getPostById(id);
  const navigate = useNavigate();

  // to test if we add a new post or edit existing post
  const { pathname } = useLocation();
  const edit = pathname.includes("edit-post");
  const { currentUser } = useUserContext();

  const [title, setTitle] = useState(post?.title || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [tags, setTags] = useState(post?.tags?.join(",") || "");
  const [image, setImage] = useState(post?.image || "");
  const [content, setContent] = useState(post?.content || "");
  const { LoggedIn } = useUserContext();
  const hasShownWarning = useRef(false);

  useEffect(() => {
    if (!LoggedIn && !hasShownWarning.current) {
      hasShownWarning.current = true;
      toast.warn("You must be logged in to create or edit a post.", {
        autoClose: 2000,
        className:
          "!text-sm !w-[70%] !mt-8 sm:!text-base sm:!w-[400px] sm:!mt-4",
      });
      navigate("/login");
    }
  }, [LoggedIn, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedPost = {
      id: edit && post?.id ? post?.id : crypto.randomUUID(),
      title: title,
      excerpt,
      author,
      tags: tags.split(",").map((tag) => tag.trim()),
      image,
      date:
        edit && post?.date
          ? post?.date
          : new Date().toISOString().split("T")[0],
      lastUpdatedDate: new Date().toISOString().split("T")[0],
      content,
      canDeleted: true,
      canEdited: true,
      createdBy: currentUser?.name,
    };

    const updatedPosts = edit
      ? blogPosts.map((p) => (p.id === post?.id ? updatedPost : p))
      : [...blogPosts, updatedPost];

    toast.success(
      `${edit ? "Post Edited Successfully" : "Post Published Successfully"}`,
      {
        autoClose: 1000,
        className:
          "!text-sm !w-[70%] !mt-8 sm:!text-base sm:!w-[400px] sm:!mt-4",
      }
    );
    resetForm();
    navigate(`/posts/${updatedPost.id}`);
    setBlogPosts(updatedPosts);
  };

  const resetForm = () => {
    setTitle("");
    setExcerpt("");
    setAuthor("");
    setTags("");
    setImage("");
    setContent("");
  };

  if (!LoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen ">
      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="container px-8 max-w-4xl mx-auto  m-auto">
          <div className="mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              {!edit ? "Create a New Blog Post" : "Edit Blog Post"}
            </h1>
            <p className="sm:text-xl text-lg text-gray-500 mb-6">
              {!edit
                ? "Let's share your knowledge with the world."
                : "Update your post and keep your readers informed."}
            </p>
          </div>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="py-16 bg-white max-w-4xl px-8 m-auto"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="title">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="author">
            Author Name
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="author"
            name="author"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="tags">
            Tags
          </label>
          <input
            required
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            id="tags"
            name="tags"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
            placeholder="Comma separated tags (e.g. react,typescript,blog)"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="coverImage">
            Cover Image URL
          </label>
          <input
            required
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="coverImage"
            name="coverImage"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            required
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            name="excerpt"
            className="w-full border border-gray-300 rounded px-3 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
            placeholder="Short summary of your post"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            className="w-full border border-gray-300 rounded px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
            placeholder="Write your post content here..."
            required
          />{" "}
          <p className="text-sm text-gray-500 mt-1">
            You can write using <span className="font-medium">Markdown</span>{" "}
            syntax. For example: <code>#Heading</code>, <code>**bold**</code>,{" "}
            <code>-list</code>.
          </p>
          <p className="text-sm text-gray-500  mt-1">
            Need help?{" "}
            <a
              href="https://www.markdownguide.org/cheat-sheet/"
              target="_blank"
              className="underline text-violet-500"
            >
              See Markdown examples
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Or you can use this handy tool to convert Rich text to Markdown
            directly:{" "}
            <a
              href="https://www.blue.cc/resources/tools/convert-text-to-markdown"
              target="_blank"
              className="underline text-violet-500"
            >
              Convert Text to Markdown
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Please Replace{" "}
            <span className="font-bold">\`\`\`tsx ("...") \`\`\`</span> to{" "}
            <span className="font-bold">```tsx ("...") ```</span>
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 cursor-pointer rounded font-semibold hover:bg-blue-700 transition"
          >
            {!edit ? "Publish Post" : "Save"}
          </button>
          <button
            type="reset"
            onClick={() => {
              if (edit) {
                navigate(`/posts/${id}`);
              } else {
                resetForm();
                navigate("/posts");
              }
            }}
            className="bg-red-600  text-white px-6 py-2 cursor-pointer rounded font-semibold hover:bg-red-700 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
