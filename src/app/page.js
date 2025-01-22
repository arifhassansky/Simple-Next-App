import Link from "next/link";

const Home = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 space-y-2 md:space-y-0">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="border p-6 rounded-lg bg-gray-100 text-purple-700"
          >
            <Link className="" href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
