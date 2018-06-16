import React from 'react';

const HotelFilter = () => {
  return (
    <div className="filter-panel">
      <div className="filter-panel-header">Filter by:</div>
      <div>

    <div className="filter-panel-body">
      <h5>Your budget</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>$0 - $99 per night</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>$100 - $199 per night</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>$200 - $299 per night</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>$300 - $399 per night</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>$400 - $499 per night</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>$500+ per night</span>
        </li>
      </ul>

      <h5>Fun things to do</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Sauna</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Fitness Center</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Spa</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Massage</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Indoor Pool</span>
        </li>
      </ul>

      <h5>Star rating</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>2 stars</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>3 stars</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>4 stars</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>5+ stars</span>
        </li>
      </ul>

      <h5>Deals & discounts</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Great value today</span>
        </li>
      </ul>

      <h5>24-Hour front desk</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Front desk open 24/7</span>
        </li>
      </ul>

      <h5>Free cancellation & more</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Free cancellation</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Book without credit card</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>No prepayment</span>
        </li>
      </ul>

      <h5>Meals</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Breakfast included</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Breakfast and dinner included</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Kitchen facilities</span>
        </li>
      </ul>

      <h5>Bed Preference</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Twin beds</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Double bed</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>King bed</span>
        </li>
      </ul>

      <h5>Review Score</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>1 star</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>2 stars</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>3 stars</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>4 stars</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>5 stars</span>
        </li>
      </ul>

      <h5>Facility</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Facilities for disabled guests</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Room service</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Restaurant</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Free WiFi</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Fitness Center</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Parking</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Swimming Pool</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Spa</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Airport Shuttle</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Pet friendly</span>
        </li>
      </ul>

      <h5>Room facility</h5>

      <h5>Chain</h5>
      <ul className="hotel-filter-list">
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Courtyard by Marriott</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Crowne Plaza Hotels & Resorts</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Holiday inn hotels & reSORTS</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Jin Jiang Hotels</span>
        </li>
        <li>
          <span><input id="checkBox" type="checkbox" /></span>
          <span>Ramada</span>
        </li>
      </ul>

      <h5>Neighborhood</h5>

    </div>

      </div>
    </div>
  );

};

export default HotelFilter;
