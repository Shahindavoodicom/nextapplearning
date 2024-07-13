"use client";
import { useState } from "react";
import axios from "axios";

export default function BlogForm({ onBlogCreated }: any) {
  const [author, setAuthor] = useState("");
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!author || !header || !text) return;

    const newBlog = { id: Date.now(), author, header, text };
    await axios.post("/api/blogs", newBlog);
    onBlogCreated(newBlog);
    setAuthor("");
    setHeader("");
    setText("");
  };

  return (
    <form
      className='bg-gray-800 text-white p-4 rounded-lg shadow-lg'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-2'>
        <input
          type='text'
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='bg-gray-700 p-2 rounded-lg text-gray-300'
        />
        <input
          type='text'
          placeholder='Header'
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          className='bg-gray-700 p-2 rounded-lg text-gray-300'
        />
        <textarea
          placeholder='Text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='bg-gray-700 p-2 rounded-lg text-gray-300 resize-none'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white p-2 rounded-xl'
        >
          Create Blog
        </button>
      </div>
    </form>
  );
}
