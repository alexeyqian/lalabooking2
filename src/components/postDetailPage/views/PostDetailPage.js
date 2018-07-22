import React from 'react';
import axios from 'axios';

class PostDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      post: {}
    };

  }

  componentDidMount() {
    this.setState({loading: true});

    const {slug} = this.props.match.params;
    axios.get('/api/v1/posts/' + slug)
      .then((res) => {
        this.setState({post: res.data.data});
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      })
      .then(() => { // always run, equal to finally{}
        this.setState({loading: false});
      });
  }

  render() {
    const {post} = this.state;
    if(!post)
      return null;

    return (

      <div className="row">
        {this.state.loading &&
        <div className="loader" />
        }

        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

    );
  }
}

export default PostDetailPage;
