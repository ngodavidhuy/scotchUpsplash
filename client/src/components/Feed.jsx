import React from 'react';
import FeedEntry from './FeedEntry';

const Feed = ({feed}) => {
  console.log(feed);
  let posts = feed.map((post, idx) => {
    return <FeedEntry key={idx} post={post} />
  });

  return (
    <div className="feed-container">
      {posts}
    </div>
  );
}

export default Feed;