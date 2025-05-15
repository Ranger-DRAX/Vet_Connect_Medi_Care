import React from 'react';
import ForumPostCard from './ForumPostCard';

const ForumPostList = ({ posts }) => {
  if (!posts.length) return <p className="text-center text-gray-500">No posts yet.</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <ForumPostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default ForumPostList;
