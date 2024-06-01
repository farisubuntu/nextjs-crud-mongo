import Image from "next/image";

export default async function SinglePost({ params }) {
  const { id } = params;
  console.log("ID: ", id);
  const res = await fetch(`http://localhost:3000/api/blog/posts/${id}`, {
    method: "GET",
  });

  const data = await res.json();
  const post = data.post;
  console.log("post: ", post);
  return (
    <>
      <div>SinglePost</div>
      <hr />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={post.img}
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {post.title}
            </div>

            <p className="mt-2 text-slate-500">{post.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
