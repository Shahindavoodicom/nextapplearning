"use client";
import axios from "axios";

export default function BlogTable({
  blogs,
  onDelete,
  className,
}: {
  className?: string;
  blogs: any;
  onDelete: any;
}) {
  const handleDelete = async (id: any) => {
    await axios.delete(`/api/blogs/${id}`);
    onDelete(id);
  };

  return (
    <table className={`w-4/5 mt-8 bg-black text-white ${className}`}>
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
                <button
                  className='bg-red-500 hover:bg-red-700 active:bg-red-900 transition-colors text-white font-bold py-2 px-4 rounded-lg'
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
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
