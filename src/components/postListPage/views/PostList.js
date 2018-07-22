import React from 'react';
import PropTypes from 'prop-types';
import PostListRow from './PostListRow';

const PostList = ({posts}) => {
  if(!posts || posts.length <= 0)
    return <div>Not found</div>;

  return (
    <div>
      {posts.map(post =>
        <PostListRow key={post.slug} post={post}/>
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
