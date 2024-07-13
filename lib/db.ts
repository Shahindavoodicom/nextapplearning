let blogs: string[] = [];

export function getBlogs() {
  return blogs;
}

export function addBlog(blog: any) {
  blogs.push(blog);
  return blogs.slice(-3);
}

export function deleteBlog(id: any) {
  //@ts-ignore
  blogs = blogs.filter((blog) => blog.id !== id);
}
