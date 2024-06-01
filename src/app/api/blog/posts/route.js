import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, img, content } = await req.json();
  console.log(title, img, content);
  await connectMongoDB();
  await Post.create({ title, img, content });
  return NextResponse.json({ message: "Post created" }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongoDB();
    const all = await Post.find({});
    console.log("GET", all);
    // return NextResponse.json({ posts });
    return NextResponse.json({ posts: all }, { status: 200 });
   
  } catch (err) {
    throw new Error(err);
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  console.log('id',id);
  await connectMongoDB();
  await Post.findByIdAndDelete(id);
  return NextResponse.json({ message: "Post deleted" }, { status: 200 });
}
