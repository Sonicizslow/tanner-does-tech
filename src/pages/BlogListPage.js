//BlogListPage.js

import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Exploring the New Features of ES2021',
    summary: 'A look into the exciting new features that come with ES2021, including logical assignment operators, Promise.any, String.prototype.replaceAll, and more.',
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    summary: 'React Hooks have changed the way we write React components. Learn about useState, useEffect, and custom Hooks in this comprehensive guide.',
  },
  {
    id: 3,
    title: 'Building a REST API with Node.js',
    summary: 'Step by step tutorial on building a RESTful API service using Node.js, Express, and MongoDB for the backend.',
  },
  // Add more posts as needed
];

function BlogList() {
  return (
    <div className="bg-zinc-800 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">The Secret Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-black rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-4">{post.summary}</p>
              {/* You can add Link from react-router-dom here if you have a separate route for each post */}
              {/* <Link to={`/posts/${post.id}`} className="text-indigo-500 hover:text-indigo-600 transition duration-300 ease-in-out">Read more</Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
