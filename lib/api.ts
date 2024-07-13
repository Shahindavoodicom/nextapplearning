import { getBlogs, addBlog, deleteBlog } from "./db";

export function getBlogsAPI() {
  return getBlogs();
}

export function addBlogAPI(blog: any) {
  return addBlog(blog);
}

export function deleteBlogAPI(id: any) {
  deleteBlog(id);
}
