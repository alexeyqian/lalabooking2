import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Cookies from 'js-cookie';
import 'react-datepicker/dist/react-datepicker.css';

class SideSearchComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    let checkin = new moment();
    let checkout = moment().add(1, 'days');
    let adults = 2;
    let children = 0;

    if(Cookies.get('checkin'))
      checkin = moment(Cookies.get('checkin'));
    if(Cookies.get('checkout'))
      checkout = moment(Cookies.get('checkout'));
    if(Cookies.get('adults'))
      adults = Cookies.get('adults');
    if(Cookies.get('children'))
      children = Cookies.get('children');

    this.state = {
      checkin: checkin,
      checkout: checkout,
      adults: adults,
      children: children
    };

    this.handleChangeCheckin = this.handleChangeCheckin.bind(this);
    this.handleChangeCheckout = this.handleChangeCheckout.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const google = window.google;
    new google.maps.places.Autocomplete(document.getElementById('destination'));
  }

  componentWillUnmount() {}

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    //alert(`destination: ${this.destination.value}, sleeps: ${this.state.sleeps}, isTripping: ${this.state.isTripping}, checkin: ${this.state.startDate.format('YYYY-MM-DD')}, checkout: ${this.state.endDate.format('YYYY-MM-DD')}`);
    //event.preventDefault();
    // Cookies.set('destination', this.destination.value, { expires: 7 });
    // Cookies.set('checkin', this.state.checkin, { expires: 1 });
    // Cookies.set('checkout', this.state.checkout, { expires: 1 });
    // Cookies.set('adults', this.state.adults, { expires: 7 });
    // Cookies.set('children', this.state.children, { expires: 7 });
    //
    // const addressUrl = this.getAddressUrlFromString(this.destination.value);
    // let parameters = this.getQueryParameters(this.state);
    // let url = window.location.protocol + '//' + window.location.host + '/search/' + addressUrl + parameters;
    // //alert(url);
    // window.location.href = url.replaceAll(' ','-');
    //debugger;
    //this.context.history.push('/hotels');
    window.location.href="/hotels";
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

  getPlaceObject(d){

    const destination = d;
    let city;
    let state;
    let country;
    let location;

    const arr = destination.split(',');
    const length = arr.length;
    if (length <= 0) {
      return '';
    }

    if (length >= 1) {
      country = arr[length - 1].trim();
    }
    if (length >= 2) {
      state = arr[length - 2].trim().replace(/[0-9]/g, '');
    } // in case there are zipcode inside the input
    if (length >= 3) {
      city = arr[length - 3].trim();
    }

    location = city;
    if (!location) {
      location = state;
    }
    if (!location) {
      location = country;
    }

    location = location.replace(' ', '+');

    return {country: country, state: state, city: city, location: location};
  }

  getAddressUrlFromString(des) {
    //alert(des);
    let city;
    let state;
    let country;

    const arr = des.replace('-', ',').split(',');
    const length = arr.length;
    if (length <= 0) {
      return '';
    }

    if (length >= 1) {
      country = arr[length - 1].trim();
    }
    if (length >= 2) {
      state = arr[length - 2].trim().replace(/[0-9]/g, '').trim();
    } // in case there are zipcode inside the input
    if (length >= 3) {
      city = arr[length - 3].trim();
    }

    let addressUrl = '';
    if (country) {
      addressUrl = country + "/";
    }
    if (state) {
      addressUrl += state + "/";
    }
    if (city) {
      addressUrl += city + "/";
    }
    //if (a.neighborhood)
    //addressUrl += a.neighborhood + "/";
    //  alert(addressUrl);
    // remove last slash "/" "China/shanghai
    //addressUrl = addressUrl.substring(0, addressUrl.length - 1).replaceAll(' ', '-').toLowerCase();
    //addressUrl = addressUrl.replaceAll(' ', '-').toLowerCase();
    //http://localhost:3000/search/china/shanghai/?checkin=2017-07-23&checkout=2017-07-24&adults=2
    return addressUrl.toLowerCase();
  }

  render() {
    let defaultDestination = '';
    if(Cookies.get('destination'))
      defaultDestination = Cookies.get('destination');

    return (
      <div className="form">

        <div className="col-xs-12 form-group">
          <label htmlFor="destination">Destination</label>
          <input type="text" className="form-control" id="destination" name="destination"
                 ref={(input) => this.destination = input} defaultValue={defaultDestination}
                 placeholder="Where to?" tabIndex="3"/>
        </div>

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="checkin">Check-in</label>
              <DatePicker selected={this.state.checkin}
                          onChange={this.handleChangeCheckin}
                          className="form-control"
                          placeholderText="Check in (optional)"/>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="checkout">Check-out</label>
              <DatePicker selected={this.state.checkout}
                          onChange={this.handleChangeCheckout}
                          className="form-control"
                          placeholderText="Check out"/>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="adults">Adults</label>
              <select className="form-control" name="adults" value={this.state.adults}
                      onChange={this.handleInputChange}  tabIndex="6">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="children">Children</label>
              <select className="form-control" name="children" value={this.state.children}
                      onChange={this.handleInputChange}  tabIndex="7">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-xs-12 form-group">
          <button id="search" name="search" className="btn btn-success form-control" type="button"
                  onClick={this.handleSubmit}  tabIndex="8">Search</button>
        </div>

      </div>
    );
  }
}

// HomeSearchComponent.propTypes = {
//   //history: PropTypes.object.isRequired
// };

function mapStateToProps(state){
  return{
    query: state.query
  };
}

export default connect(mapStateToProps)(SideSearchComponent);
