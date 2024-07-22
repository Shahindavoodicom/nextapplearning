import { addBlog } from "@/actions/createBlog";
export default function BlogForm() {
  return (
    <form
      action={addBlog}
      className='bg-gray-800 text-white p-4 rounded-lg shadow-lg'
    >
      <div className='flex flex-col justify-center gap-2'>
        <input
          type='text'
          name='author'
          placeholder='Author'
          className='bg-gray-700 p-2 rounded-lg text-gray-300'
        />
        <input
          type='text'
          name='header'
          placeholder='Header'
          className='bg-gray-700 p-2 rounded-lg text-gray-300'
        />
        <textarea
          name='text'
          placeholder='Text'
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
