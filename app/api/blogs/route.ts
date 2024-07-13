import { getBlogsAPI, addBlogAPI } from "../../../lib/api";

export async function GET(request: Request) {
  return new Response(JSON.stringify(getBlogsAPI()), { status: 200 });
}

export async function POST(request: Request) {
  const newBlog = await request.json();
  const updatedBlogs = addBlogAPI(newBlog);
  return new Response(JSON.stringify(updatedBlogs), { status: 201 });
}
