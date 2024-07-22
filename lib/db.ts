export let blogs: string[] = [];

export function getBlogs() {
  return blogs;
}

export function addBlog(blog: any) {
  blogs.push(blog);
  console.log(blogs);
  return blogs.slice(-3);
}

export function deleteBlog(id: number) {
  //@ts-ignore
  blogs = blogs.filter((blog) => blog.id !== id);
}
