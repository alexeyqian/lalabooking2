import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import * as courseActions from '../actions/courseActions';
import {NavLink, Redirect} from 'react-router-dom';

class SigninPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
  }

  login = () => {
    //fakeAuth.authenticate(() => {
    //  this.setState({ redirectToReferrer: true });
    //});
    this.setState({redirectToReferrer: true});
  };

  render(){
    //const s = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return(
      <div>
        <h1>Sign in</h1>
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
          <button type="submit" className="btn btn-primary" onClick={this.login}>Sign in</button>
        </form>

      </div>
    );

  }

}

SigninPage.propTypes = {
  courses: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
  //actions: PropTypes.object.isRequired
};
/*
function mapStateToProps(state){
  return {
    //courses: state.courses
  };
}*/

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   } ;
// }

export default connect()(SigninPage);
