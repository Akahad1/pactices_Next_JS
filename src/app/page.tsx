import LetestBlogs from "@/components/LetestBlogs/LetestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  console.log(data);
  return (
    <div className="mt-10">
      <LetestBlogs blogs={data}></LetestBlogs>
    </div>
  );
};

export default HomePage;
