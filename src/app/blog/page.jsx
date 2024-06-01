import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
export default async function BlogPage() {
  const res = await fetch("http://localhost:3000/api/blog/posts", {
    method: "GET",
  });

  const data = await res.json();
  const posts = data.posts;
  console.log("Posts from BlogPage: ", posts.posts);
  return (
    <div>
      <h1 className="text-3xl font-bold text-white pl-4 ml-4 italic bg-slate-600 mt-4 w-6/12">
        BlogPosts
      </h1>
      <Button title="Create New Post" link="/blog/create" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {posts.map((post) => (
          <div className="flex w-full space-x-2 my-2 border-2 border-slate-200 mx-4">
            <div className="w-48" key={post._id}>
              <Image
                className="h-48 object-cover md:h-full"
                src={post.img}
                alt="image"
                width={200}
                height={100}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
                {post.title}
              </div>

              <Link href={`/blog/${post._id}`}>
                <p className="mt-2 text-blue-500">Read More .....</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
