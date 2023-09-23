'use client'

import React, { useState } from 'react';

const PostEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you can send the title and content to your server or perform any other necessary actions.
    console.log('Title:', title);
    console.log('Content:', content);

    // Reset the form fields
    setTitle('');
    setContent('');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            className="w-full px-3 py-2 border rounded-lg border-gray-300 h-40 focus:outline-none focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEditor;
