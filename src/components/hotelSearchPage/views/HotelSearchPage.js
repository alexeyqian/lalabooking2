import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {view as Search} from '../../searchOnHome';

import * as actions from '../actions';
import HotelList from './HotelList';
import {view as HotelFilter} from '../../hotelFilter';

class HotelSearchPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.handelSearchChange = this.handelSearchChange.bind(this);
    this.handelFilterChange = this.handelFilterChange.bind(this);
    this.handelSelectHotel = this.handelSelectHotel.bind(this);
  }

  componentDidMount(){
    this.props.actions.searchHotels();
  }

  handelSearchChange(query, url){
    this.props.actions.searchHotels(query);
    this.props.history.push(url);
  }

  handelFilterChange(filter){
    this.props.actions.searchHotels(filter);
    //alert(JSON.stringify(filter));
  }

  handelSelectHotel(id){
    this.props.history.push(`hotel/${id}`);
  }

  render(){
    const {hotels} = this.props;

    let hotelList = null;
    if(!this.props.loading)
    {
      if(hotels && hotels.length > 0)
        hotelList = <HotelList hotels={hotels}/>;
      else
        hotelList = <div>No found</div>;
    }

    return(
      <div className="row no-gutters">
        <div className="col-md-3">
          <div>
            <HotelFilter onSubmit={this.handelFilterChange}/>
          </div>

        </div>
        <div className="col-md-9">

          <div className="bg-light mb-2 p-2">
            <Search onSearch={this.handelSearchChange}/>
          </div>

          {this.props.loading &&
          <div className="loader" />
          }

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
  hotels: PropTypes.array,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  let hotels = state.hotels || [];
  let query = state.query || {};

  return {
    hotels,
    query,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(actions, dispatch)
   } ;
 }

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearchPage);

