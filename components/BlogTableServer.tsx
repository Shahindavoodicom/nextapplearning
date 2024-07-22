import { getBlogsAPI } from "@/lib/api";
import { deleteBlog } from "@/actions/deleteBlog";
import { blogs } from "@/lib/db";

export default function BlogTable() {
  //   const blogs = getBlogsAPI(); // API call example

  console.log(blogs);

  return (
    <table className={`w-full mt-8 mx-auto bg-black text-white`}>
      <thead className='bg-gray-700'>
        <tr>
          <th className='py-3 px-6 font-bold uppercase'>ID</th>
          <th className='py-3 px-6 font-bold uppercase'>Author</th>
          <th className='py-3 px-6 font-bold uppercase'>Header</th>
          <th className='py-3 px-6 font-bold uppercase'>Text</th>
          <th className='py-3 px-6 font-bold uppercase'>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.length > 0 ? (
          blogs.map((blog: any) => (
            <tr key={blog.id} className='hover:bg-gray-600'>
              <td className='py-3 px-6'>{blog.id}</td>
              <td className='py-3 px-6'>{blog.author}</td>
              <td className='py-3 px-6'>{blog.header}</td>
              <td className='py-3 px-6'>{blog.text}</td>
              <td className='py-3 px-6'>
                <input
                  className='bg-red-500 hover:bg-red-700 active:bg-red-900 transition-colors text-white font-bold py-2 px-4 rounded-lg'
                  onClick={() => deleteBlog(blog.id)}
                >
                  Delete
                </input>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className='text-center py-20 animate-pulse'>
              No blogs available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
