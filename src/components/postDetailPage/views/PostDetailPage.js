import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
//import {Link} from 'react-router-dom';
import moment from 'moment';
import * as actions from '../actions';
import PostApi from '../../../apiClient/PostApi';
import * as ajaxStatusActions from '../../../actions/ajaxStatusActions';


class PostDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {}
    };

  }

  componentWillMount() {
    const post = this.props.actions.loadPostById(this.props.id);
    this.setState({post});
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
  id: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    id: ownProps.match.params.id,
    post: state.post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);
