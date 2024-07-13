"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BlogTable from "../../components/BlogTable";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await axios.get("/api/blogs");
      setBlogs(response.data);
    }
    fetchBlogs();
  }, []);

  const handleDelete = (id: any) => {
    //@ts-ignore
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className='relative flex flex-col items-center justify-center h-screen p-6 bg-black text-white overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <motion.div
          className='w-60 h-60 bg-blue-500 rounded-full absolute top-0 left-0'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
            x: ["0%", "20%", "0%"],
            y: ["0%", "20%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className='w-64 h-64 bg-red-500 rounded-full absolute bottom-0 right-0'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
            x: ["0%", "-50%", "0%"],
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>
      <motion.h1
        className='text-3xl font-bold border-b-2 pb-5 border-white mb-4 w-1/2 text-center z-10'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Blogs
      </motion.h1>
      <motion.div
        className='w-full max-w-md mt-8 z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <BlogTable blogs={blogs} onDelete={handleDelete} />
      </motion.div>
      <motion.a
        href='/blog/create'
        className='text-blue-400 mt-4 hover:underline z-10'
        whileHover={{ scale: 1.1 }}
      >
        Go to creating blog
      </motion.a>
    </div>
  );
}
