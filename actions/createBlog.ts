"use server";
import { addBlogAPI } from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function addBlog(FormData: FormData) {
  if (
    !FormData.get("author") ||
    !FormData.get("header") ||
    !FormData.get("text")
  )
    return;

  const data = {
    author: FormData.get("author") as string,
    header: FormData.get("header") as string,
    text: FormData.get("text") as string,
    id: Math.floor(Math.random() * 100).toString(),
  };

  const updatedBlogs = addBlogAPI(data);

  revalidatePath("/");
}
