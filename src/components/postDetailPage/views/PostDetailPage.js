import React from 'react';
import PropTypes from 'prop-types';

class PostDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {}
    };

  }

  componentWillMount() {
    //const post = this.props.actions.loadPostById(this.props.id);
    //this.setState({post});
  }

  render() {

    if(this.state.post)
      return null;

    return (

      <div className="row">

      </div>

    );
  }
}

PostDetailPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default PostDetailPage;
