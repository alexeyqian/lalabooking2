import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
//import SideSearch from '../hotel/SideSearch';

import * as actions from '../actions';
import {view as HotelList} from '../../hotelList';
import {view as HotelFilter} from '../../hotelFilter';

class HotelSearchPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.handelFilterChange = this.handelFilterChange.bind(this);
    this.handelSelectHotel = this.handelSelectHotel.bind(this);
  }

  componentDidMount(){
    this.props.actions.searchHotels();
  }

  handelFilterChange(){

  }

  handelSelectHotel(id){
    this.props.history.push(`hotel/${id}`);
  }

  render(){
    const {hotels} = this.props;

    let hotelList = <HotelList hotels={hotels}/>;

    if(!hotels || hotels.length <= 0)
      hotelList = <div>No hotels found</div>;

    return(
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="side-search-panel bg-light" />
          <br/>
          <div>
            <HotelFilter onSubmit={this.handelFilterChange}/>
          </div>

        </div>
        <div className="col-md-9">
          <div className="ml-1">
            {hotelList}
          </div>
        </div>
      </div>
    );

  }

}

HotelSearchPage.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  hotels: PropTypes.array.isRequired
};

function mapStateToProps(state){
  let hotels = state.hotels;
  if(!hotels)
    hotels = [];
  let query = state.query;
  if(!query)
    query = {};

  return {
    hotels,
    query
  };
}

function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(actions, dispatch)
   } ;
 }

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearchPage);

