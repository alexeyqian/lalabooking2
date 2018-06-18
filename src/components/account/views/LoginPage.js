import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import {Link, Redirect} from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.actions.login(this.state.username, this.state.password);
  }

  login = () => {
    //fakeAuth.authenticate(() => {
    //  this.setState({ redirectToReferrer: true });
    //});
    this.setState({redirectToReferrer: true});
  };

  render(){
    if (this.props.isLoggedIn) {
      return <Redirect to="/"/>;
    }

    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return(
      <div>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            <NavLink to="/forgotPassword" className="ml-2">Forgot password?</NavLink>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
          <Link to="/register">Register</Link>
        </form>

      </div>
    );

  }

}

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    isLoggedIn: state.user.isLoggedIn
  };
}

 function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(actions, dispatch)
   } ;
 }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
