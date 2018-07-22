import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import PostList from './PostList';

class PostListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      posts: [],
      pageIndex: 0,
      pageSize: 20
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.setState({loading: true});

    axios.get('/api/v1/posts')
      .then((res) => {
        this.setState({posts: res.data.data});
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      })
      .then(() => { // always run, equal to finally{}
        this.setState({loading: false});
      });
  }

  handlePageChange() {

  }

  render() {

    return (
      <div>
        {this.state.loading &&
          <div className="loader" />
        }

        <PostList posts={this.state.posts} />

      </div>
    );

  }
}


PostListPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default PostListPage;
