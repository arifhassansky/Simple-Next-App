const BlogDetails = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();

  return (
    <div className="flex flex-col  items-center mt-12 h-[78vh]">
      <div className="bg-gray-100 rounded-lg text-center space-y-6 p-16">
        <h2 className="text-purple-700 uppercase text-xl font-bold">
          {post?.title}
        </h2>
        <p>{post?.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
