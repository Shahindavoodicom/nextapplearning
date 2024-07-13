"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogForm from "../../../components/BlogForm";
import BlogTable from "../../../components/BlogTable";
import axios from "axios";

export default function CreateBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await axios.get("/api/blogs");
      setBlogs(response.data);
    }
    fetchBlogs();
  }, []);

  const handleBlogCreated = (newBlog: any) => {
    //@ts-ignore
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs].slice(0, 3));
  };

  return (
    <div className='relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 overflow-hidden'>
      <motion.h1
        className='text-3xl font-bold mb-4 z-10'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Creating a Blog
      </motion.h1>
      <motion.div
        className='w-full max-w-md z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BlogForm onBlogCreated={handleBlogCreated} />
      </motion.div>
      <motion.div
        className='w-full max-w-md mt-8 z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BlogTable
          flag={flag}
          setFlag={setFlag}
          blogs={blogs}
          onDelete={() => {}}
        />
      </motion.div>
      <motion.a
        href='/blogs'
        className='text-blue-400 mt-4 hover:underline z-10'
        whileHover={{ scale: 1.1 }}
      >
        Go to blogs
      </motion.a>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <motion.div
          className='w-72 h-72 bg-blue-600 opacity-25 rounded-full absolute top-16 left-32'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className='w-72 h-72 bg-green-600 opacity-25 rounded-full absolute bottom-16 right-32'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
}
