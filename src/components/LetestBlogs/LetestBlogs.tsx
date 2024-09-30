import { BlogPost } from "../type/gobal";
import LatestBlogCard from "../ui/LatestBlogCard";

const LetestBlogs = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-6 mb-6">Hello, LetestBlogs!</h1>
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 mb-10">
          {blogs?.slice(0, 2).map((blog) => (
            <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-2 mb-10">
          {blogs?.slice(2, 5).map((blog) => (
            <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetestBlogs;
