import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

class CheckinCheckout extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkin: this.props.checkin,
      checkout: this.props.checkout,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCheckin = this.handleChangeCheckin.bind(this);
    this.handleChangeCheckout = this.handleChangeCheckout.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    this.props.onChangeDates(this.state);
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

  render(){

    return (
      <div className="row">
        <div className="form-group col-md-4">
          <DatePicker selected={this.state.checkin}
                      onChange={this.handleChangeCheckin}
                      className="form-control"
                      placeholderText="Check in (optional)"/>
        </div>

        <div className="form-group col-md-4">
          <DatePicker selected={this.state.checkout}
                      onChange={this.handleChangeCheckout}
                      className="form-control"
                      placeholderText="Check out"/>
        </div>

        <div className="form-group col-md-4">
          <button className="btn btn-primary" onClick={this.props.handleSubmit}>Change Dates</button>
        </div>
      </div>
    );

  }

}

CheckinCheckout.propTypes = {
  checkin: PropTypes.object.isRequired,
  checkout: PropTypes.object.isRequired,
  onChangeDates: PropTypes.func.isRequired
};

export default CheckinCheckout;
