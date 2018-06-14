import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/hotelActions';
import HomeSearch from './HomeSearch2';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToHotelsPage = this.redirectToHotelsPage.bind(this);
  }

  redirectToHotelsPage(query, url) {
    this.props.actions.updateHotelQuery(query);
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 mt-5">
          <HomeSearch onSearch={this.redirectToHotelsPage}/>
        </div>
      </div>
    );
  }

}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    query: state.query
  };
}

function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(hotelActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
