"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogFormServer from "@/components/BlogFormServer";
import BlogTableServer from "@/components/BlogTableServer";

export default function CreateBlogPage() {
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
        <BlogFormServer />
      </motion.div>
      <motion.div
        className='w-full max-w-md mt-8 z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BlogTableServer />
      </motion.div>
      <Link
        href='/server/blogs'
        className='text-blue-400 mt-4 hover:underline z-10 transition-transform hover:scale-105'
      >
        Go to blogs
      </Link>
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
