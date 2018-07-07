import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import {view as SearchOnHome} from '../../searchOnHome';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToHotelsPage = this.redirectToHotelsPage.bind(this);
  }

  redirectToHotelsPage(query, url) {
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 mt-5">
          <SearchOnHome onSearch={this.redirectToHotelsPage}/>
        </div>
      </div>
    );
  }

}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};



function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(actions, dispatch)
   };
}

export default connect(null, mapDispatchToProps)(HomePage);
