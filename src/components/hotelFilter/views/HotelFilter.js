import React from 'react';
import PropTypes from 'prop-types';

import facilities from '../../../data/facility_search';
import rankings from '../../../data/hotel_ranking';
import brands from '../../../data/brand';
import priceRange from '../../../data/price_range';

class HotelFilter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      city_id: '',
      location_id: '',
      price_from: 0,
      price_to: 0,
      ranks: [],
      brands: [],
      facilities: []
    };

    this.handleRankChange = this.handleRankChange.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);

  }

  /*
  handlePriceChange(event) {
    const target = event.target;
    const value = target.id.replace('pr_','');

    const arr = value.split('-');
    this.setState({
      price_from: arr[0],
      price_to: arr[1]
    });
  }*/

  handleRankChange(event) {
    const target = event.target;
    const value = target.id.replace('rank_','');
    let newValue = this.state.ranks;

    const index = newValue.indexOf(value);

    if(event.target.checked)
    {
      if (index <= -1) newValue.push(value);
    }
    else{ // remove it from ranks
      if (index > -1) newValue.splice(index, 1);
    }

    //alert(JSON.stringify(newValue));

    this.setState({
      ranks: newValue
    });
  }

  handleBrandChange(event) {
    const target = event.target;
    const value = target.id.replace('brand_','');
    let newValue = this.state.brands;

    const index = newValue.indexOf(value);

    if(event.target.checked)
    {
      if (index <= -1) newValue.push(value);
    }
    else{ // remove it from ranks
      if (index > -1) newValue.splice(index, 1);
    }

    //alert(JSON.stringify(newValue));

    this.setState({
      brands: newValue
    });
  }

  render() {

    return (
      <div className="filter-panel">
        <div className="filter-panel-header">Filter by:</div>
        <div>

          <div className="filter-panel-body">
            <h5>Your budget / per night</h5>
            <ul className="hotel-filter-list">
              {
                priceRange.map(item => {
                  return (
                    <li key={item.id}>
                      <span><input id={"pr_" + item.id} type="checkbox"/></span>
                      <span>{item.name}</span>
                    </li>
                  );
                })
              }
            </ul>

            <h5>Stars</h5>
            <ul className="hotel-filter-list">
              {
                rankings.map(item => {
                  return (
                    <li key={item.id}>
                      <span><input id={"rank_" + item.id} type="checkbox" onChange={this.handleRankChange}/></span>
                      <span>{item.name}</span>
                    </li>
                  );
                })
              }
            </ul>

            <h5>Brand</h5>
            <ul className="hotel-filter-list">
              {
                brands.map(item => {
                  return (
                    <li key={item.id}>
                      <span><input id={"brand_" + item.id} type="checkbox" onChange={this.handleBrandChange}/></span>
                      <span>{item.name}</span>
                    </li>
                  );
                })
              }
            </ul>

            <h5>Facility</h5>
            <ul className="hotel-filter-list">
              {
                facilities.map(item => {
                  return (
                    <li key={item.id}>
                      <span><input id={"fa_" + item.id} type="checkbox"/></span>
                      <span>{item.name}</span>
                    </li>
                  );
                })
              }
            </ul>

          </div>

        </div>
      </div>
    );
  }

}

HotelFilter.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default HotelFilter;
