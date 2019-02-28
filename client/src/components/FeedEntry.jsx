import React from 'react';

const FeedEntry = ({post}) => {
  return (
    <div className="feed-entry">
      <img src={post.urls['small']} />
    </div>
  );
};

export default FeedEntry;