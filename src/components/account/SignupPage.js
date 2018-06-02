import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import * as courseActions from '../actions/courseActions';
//import {browserHistory} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class SignupPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    //const s = this.state;

    return(
      <div>
        <h1>Sign up</h1>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="confirm Password" />
          </div>

          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>

      </div>
    );

  }

}

SignupPage.propTypes = {
  isAuthenticated: PropTypes.object.isRequired
};



// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   } ;
// }

export default connect()(SignupPage);
