import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import * as courseActions from '../actions/courseActions';
import HotelList from './HotelList';
import SideSearch from './SideSearch';
import HotelFilter from './HotelFilter';

class HotelsPage extends React.Component{
  constructor(props, context){
    super(props, context);

  }

  render(){
    const {hotels} = this.props;
    return(
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="side-search-panel bg-light">
            <SideSearch/>
          </div>
          <br/>
          <div>
            <HotelFilter city={"shanghai"}/>
          </div>

        </div>
        <div className="col-md-9">
          <div className="ml-1">
          <HotelList hotels={hotels}/>
          </div>
        </div>
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
