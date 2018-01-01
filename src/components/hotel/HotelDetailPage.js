import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/hotelActions';
//import {browserHistory} from 'react-router-dom';
import * as ajaxStatusActions from '../../actions/ajaxStatusActions';

import hotelApi from '../../api/mockHotelApi';

class HotelDetailPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      hotel:{id: '', name: '', category: ''}
    };

  }

  componentWillMount(){
    ajaxStatusActions.beginAjaxCall();
    hotelApi.getHotelById(this.props.id)
      .then(h => {
        ajaxStatusActions.ajaxCallSuccess();
        this.setState({hotel: h});
      }).catch(error => {
        ajaxStatusActions.ajaxCallError();
        throw(error);
      });
  }

  render(){
    const {hotel} = this.state;
    return(
      <div>
        {hotel && hotel.id.length > 0 &&
          <div>
            <h1>Hotel: {hotel.name}</h1>
            <span>{hotel.id} - {hotel.category}</span>
          </div>
        }
      </div>
    );
  }
}

HotelDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  //hotel: PropTypes.object,
  actions: PropTypes.object.isRequired,
  //match: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return {
    id: ownProps.match.params.id,
    //hotel: state.hotel
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(hotelActions, dispatch)
  } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetailPage);
