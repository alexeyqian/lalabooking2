import React from 'react';
import PropTypes from 'prop-types';
import PostListRow from './PostListRow';

const PostListPage = ({posts, postsCount, pager, currentPage}) => {
  if(!posts || !posts.length)
    return (
      <div className="">No posts here ...</div>
    );

  return (
    <div>
      {posts.map(post =>
        <PostListRow key={post.slug} post={post}/>
      )}

    </div>
  );
};

PostListPage.propTypes = {
  posts: PropTypes.array.isRequired,
  postsCount: PropTypes.object.isRequired,
  pager: PropTypes.object,
  currentPage: PropTypes.object
};

export default PostListPage;
