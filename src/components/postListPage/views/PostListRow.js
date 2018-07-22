import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PostListRow = ({post}) => {
  return (

    <div id={'post_'+post.id} className="card post-item p-1 my-1">

    </div>
  );

};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
