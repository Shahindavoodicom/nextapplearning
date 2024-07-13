"use client";
import axios from "axios";
import { motion } from "framer-motion";

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
    <motion.div
      className={`w-4/5 mt-8 bg-black text-white ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className='w-full'>
        <thead className='bg-gray-800'>
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
              <motion.tr
                key={blog.id}
                className='hover:bg-gray-700 transition-colors duration-300 *:text-white'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * blog.id }}
              >
                <td className='py-3 px-6'>{blog.id}</td>
                <td className='py-3 px-6'>{blog.author}</td>
                <td className='py-3 px-6'>{blog.header}</td>
                <td className='py-3 px-6'>{blog.text}</td>
                <td className='py-3 px-6'>
                  <motion.button
                    className='bg-red-500 hover:bg-red-700 active:bg-red-900 transition-colors text-white font-bold py-2 px-4 rounded-lg'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </motion.button>
                </td>
              </motion.tr>
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
    </motion.div>
  );
}
