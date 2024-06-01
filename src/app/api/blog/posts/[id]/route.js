import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  console.log(".../posts/[id] params.id", id);
  try {
    await connectMongoDB();
    const post = await Post.findOne({ _id: id });
    if (post) {
      return NextResponse.json({ post }, { status: 200 });
    }
  } catch (err) {
    console.log("Error occured when fetching post");
    throw new Error(err);
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newImg: img,
    newContent: content,
  } = await req.json();
  await connectMongoDB();
  await Post.findByIdAndUpdate(id, { title, img, content });
  return NextResponse.json({ message: "Post updated" }, { status: 200 });
}
