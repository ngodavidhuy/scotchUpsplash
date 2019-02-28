import React from 'react';

const FeedEntry = ({post}) => {
  return (
    <div className="feed-entry">
      <a href={post.links['html']}><img src={post.urls['small']} /></a>
    </div>
  );
};

export default FeedEntry;