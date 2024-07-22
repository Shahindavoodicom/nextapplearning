"use server";
import { deleteBlogAPI } from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function deleteBlog(id: number) {
  deleteBlogAPI(id);

  revalidatePath("/");
}
