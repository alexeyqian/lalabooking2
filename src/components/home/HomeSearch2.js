import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import cities from '../../data/city';

import 'react-datepicker/dist/react-datepicker.css';

class HomeSearchComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedCity: '',
      checkin: new moment(),
      checkout: moment().add(1, 'days'),
      adults: 2,
      children: 0
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
    const cityObj = cities.filter((city) => {
      return city.city_name === this.state.selectedCity;
    })[0];
    let cityUrl = cityObj.city_name;
    if (!cityObj.is_state_city)
      cityUrl = cityObj.state_name + '/' + cityUrl;

    let parameters = this.getQueryParameters(this.state);
    let url = '/hotels/' + cityUrl + parameters;
    //alert(url);
    // window.location.href = url.replaceAll(' ','-');
    //debugger;
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
            value={this.state.selectedCity}
            onChange={(event, value) => this.setState({selectedCity: value})}
            onSelect={value => this.setState({selectedCity: value})}
            wrapperStyle={{display: 'block'}}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="checkin">Check-in</label>
          <DatePicker selected={this.state.checkin}
                      onChange={this.handleChangeCheckin}
                      className="form-control"
                      placeholderText="Check in (optional)"/>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="checkout">Check-out</label>
          <DatePicker selected={this.state.checkout}
                      onChange={this.handleChangeCheckout}
                      className="form-control"
                      placeholderText="Check out"/>
        </div>

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

        <div className="form-group col-md-2">
          <label htmlFor="search">&nbsp;</label>
          <button id="search" name="search" className="btn btn-success form-control" type="button"
                  onClick={this.handleSubmit} tabIndex="8">Search
          </button>
        </div>

      </div>
    );
  }
}

HomeSearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default HomeSearchComponent;
