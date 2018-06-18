import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
//import {browserHistory} from 'react-router-dom';
import {Link, Redirect} from 'react-router-dom';

class RegisterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    const {user} = this.state;
    this.setState({
      user: {...user, [name]: value}
    });

  }

  handleSubmit(event) {
    event.preventDefault();

    const {user} = this.state;
    if (user.firstName && user.lastName
      && user.username && user.password)
      return;

    this.setState({submitted: true});
    this.actions.register(this.state.user);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/"/>;
    }

    return (
      <div>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" value={this.state.username} className="form-control" id="username" name="username"
                   placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={this.state.password} className="form-control" id="password"
                   placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" value={this.state.confirmPassword} className="form-control" id="confirmPassword"
                   name="confirmPassword" placeholder="confirm Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" value={this.state.firstName} className="form-control" id="firstName" name="firstName"
                   placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" value={this.state.lastName} className="form-control" id="lastName" name="lastName"
                   placeholder="Last Name"/>
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
          <Link to="/login" className="btn btn-link">Login</Link>
        </form>

      </div>
    );

  }

}

RegisterPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
