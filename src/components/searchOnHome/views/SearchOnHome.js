import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import cities from '../../../data/city';

import 'react-datepicker/dist/react-datepicker.css';

class HomeSearchComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    let checkin = new moment().add(1, 'days');
    if(this.props.query.checkin)
      checkin = new moment(this.props.query.checkin);

    let checkout = new moment().add(3, 'days');
    if(this.props.query.checkout)
      checkout = new moment(this.props.query.checkout);

    this.state = {
      city: this.props.query.city || '',
      checkin,
      checkout,
      adults: this.props.query.adults || 2,
      children: this.props.query.children || 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCheckin = this.handleChangeCheckin.bind(this);
    this.handleChangeCheckout = this.handleChangeCheckout.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    event.preventDefault();

    //alert(JSON.stringify(window.location));

    const cityObj = cities.filter((city) => {
      return city.city_name === this.state.city;
    })[0];
    let cityUrl = cityObj.city_name;
    if (!cityObj.is_state_city)
      cityUrl = cityObj.state_name + '/' + cityUrl;

    let parameters = this.getQueryParameters(this.state);
    let url = '/hotels/' + cityUrl + parameters;
    //alert(url);
    // window.location.href = url.replaceAll(' ','-');

    this.props.actions.updateQuery(this.state);
    this.props.onSearch(this.state, url.toLowerCase());
  }

  handleChangeCheckin(date) {
    this.setState({
      checkin: date
    });
  }

  handleChangeCheckout(date) {
    this.setState({
      checkout: date
    });
  }

  getQueryParameters(s) {
    let parameters = '';

    if (s.checkin) {
      parameters += '&checkin=' + s.checkin.format('YYYY-MM-DD');
    }

    if (s.checkout) {
      parameters += '&checkout=' + s.checkout.format('YYYY-MM-DD');
    }

    if (s.adults) {
      parameters += '&adults=' + s.adults;
    }

    if (s.children) {
      parameters += '&children=' + s.children;
    }

    if (parameters) {
      parameters = '?' + parameters.substring(1);
    }

    return parameters;
  }

  matchCityToTerm(city, value) {
    return (
      city.city_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      city.city_code.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  /**
   * An example of how to implement a relevancy-based sorting method. States are
   * sorted based on the location of the match - For example, a search for "or"
   * will return "Oregon" before "North Carolina" even though "North Carolina"
   * would normally sort above Oregon. Strings where the match is in the same
   * location (or there is no match) will be sorted alphabetically - For example,
   * a search for "or" would return "North Carolina" above "North Dakota".
   */
  sortCities(a, b, value) {
    const aLower = a.city_name.toLowerCase();
    const bLower = b.city_name.toLowerCase();
    const valueLower = value.toLowerCase();
    const queryPosA = aLower.indexOf(valueLower);
    const queryPosB = bLower.indexOf(valueLower);
    if (queryPosA !== queryPosB)
      return queryPosA - queryPosB;
    else
      return aLower < bLower ? -1 : 1;
  }

  render() {

    return (
      <div className="form-row">

        <div className="form-group col-md-4">
          <label htmlFor="destination">Destination</label>
          <Autocomplete
            sortItems={this.sortCities}
            getItemValue={(item) => item.city_name}
            items={cities}
            shouldItemRender={this.matchCityToTerm}
            /*renderMenu={children => (
              <div className="menu">
                {children}
              </div>
            )}*/
            renderItem={(item, isHighlighted) =>
              (<div key={item.city_name} style={{background: isHighlighted ? 'lightgray' : 'white'}}>
                {item.is_state_city ? item.city_name : item.city_name + ', ' + item.state_name}
              </div>)
            }
            renderInput={props =>
              <input className="form-control" {...props} />
            }
            value={this.state.city}
            onChange={(event, value) => this.setState({city: value})}
            onSelect={value => this.setState({city: value})}
            wrapperStyle={{display: 'block'}}
            menuStyle={{
              borderRadius: '3px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2px 0',
              fontSize: '90%',
              position: 'fixed',
              overflow: 'auto',
              maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
              zIndex: '998',
            }}
          />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="checkin">Check-in</label>
          <DatePicker selected={this.state.checkin}
                      onChange={this.handleChangeCheckin}
                      className="form-control"
                      placeholderText="Check in (optional)"/>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="checkout">Check-out</label>
          <DatePicker selected={this.state.checkout}
                      onChange={this.handleChangeCheckout}
                      className="form-control"
                      placeholderText="Check out"/>
        </div>
        {/*
        <div className="form-group col-md-1">
          <label htmlFor="adults">Adults</label>
          <select className="form-control" name="adults" value={this.state.adults}
                  onChange={this.handleInputChange} tabIndex="6">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="form-group col-md-1">
          <label htmlFor="children">Children</label>
          <select className="form-control" name="children" value={this.state.children}
                  onChange={this.handleInputChange} tabIndex="7">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        */}

        <div className="form-group col-md-2">
          <label htmlFor="search">&nbsp;</label>
          <button id="search" name="search" className="btn btn-primary form-control float-right" type="button"
                  onClick={this.handleSubmit} tabIndex="8">Search
          </button>
        </div>

      </div>
    );
  }
}

HomeSearchComponent.propTypes = {
  history: PropTypes.object,
  actions: PropTypes.object.isRequired,
  query: PropTypes.object,
  onSearch: PropTypes.func
};

function mapStateToProps(state) {
  // if state.query is empty, means user navigate to this page directly from search engine
  // then need to re-construct query object from url path
  // ... need to implement later.
  return {
    query: state.query || {}
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchComponent);
