import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import * as courseActions from '../actions/courseActions';
import HotelList from './HotelList';
//import {browserHistory} from 'react-router-dom';

class HotelsPage extends React.Component{
  constructor(props, context){
    super(props, context);

  }

  render(){
    const {hotels} = this.props;
    return(
      <div>
        <h1>Hotels</h1>
        <HotelList hotels={hotels}/>
      </div>
    );

  }

}

HotelsPage.propTypes = {
  hotels: PropTypes.array.isRequired,
  //history: PropTypes.object.isRequired
  //actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    hotels: state.hotels
  };
}

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   } ;
// }

export default connect(mapStateToProps)(HotelsPage);
