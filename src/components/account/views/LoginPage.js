import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import {Link, Redirect} from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
      rememberMe: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.actions.login(this.state.email, this.state.password);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/"/>;
    }

    const {from} = this.props.location.state || {from: {pathname: "/"}};
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
      <div className="row">

        <div className="col-md-6 offset-md-3">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={this.state.email} onChange={this.handleInputChange}
                     className="form-control" id="email" name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handleInputChange}
                     className="form-control" id="password" name="password" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" value={this.state.rememberMe} onChange={this.handleInputChange}
                     className="form-check-input" id="rememberMe" name="rememberMe"/>
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              <Link to="/forgotPassword" className="ml-2">Forgot password?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">Register</Link>
          </form>

        </div>

      </div>
    );

  }

}

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isLoggedIn: (state.user && state.user.isLoggedIn) || false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
