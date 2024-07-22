"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen p-6'
      style={{ backdropFilter: "blur(10px)" }}
    >
      <motion.h1
        className='text-4xl mb-24 font-bold text-center text-gray-900 dark:text-white'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Welcome to the Blogging App
      </motion.h1>

      <Link href='/blogs'>
        <motion.div
          className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 dark:bg-blue-400 dark:shadow-none dark:hover:bg-blue-500 mb-10`}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.33 }}
        >
          View Blogs
        </motion.div>
      </Link>

      <Link href='/blog/create'>
        <motion.div
          className={`px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 dark:bg-green-400 dark:shadow-none dark:hover:bg-green-500 mb-10`}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44 }}
        >
          Create a Blog
        </motion.div>
      </Link>

      <Link href='/server/blogs'>
        <motion.div
          className={`px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-200 dark:bg-slate-600 dark:shadow-none dark:hover:bg-slate-500`}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          View Server Blogs
        </motion.div>
      </Link>
    </div>
  );
}
