import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import toastr from 'toastr';
import UserSideMenu from '../../../components/common/UserSideMenu';

class ChangePasswordPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
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

    if (this.state.newPassword !== this.state.confirmPassword) {
      toastr.error('new password and confirm password are not match.');
      return;
    }

    this.props.actions.changePassword(this.state.currentPassword, this.state.newPassword);
  }

  render() {
    /*
    const userStr = localStorage.getItem('user');
    const user = JSON.parse(userStr);
    if (!user || !user.isLoggedIn) {
      return <Redirect to="/login"/>;
    }*/

    return (

      <div className="row">
        <div className="col-md-3">
          <UserSideMenu/>
        </div>

        <div className="col-md-9">

          <div className="">
            <h1>Change Password</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input type="password" value={this.state.currentPassword} onChange={this.handleInputChange}
                       className="form-control" id="currentPassword" name="currentPassword"
                       placeholder="Current Password"/>
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input type="password" value={this.state.newPassword} onChange={this.handleInputChange}
                       className="form-control" id="newPassword" name="newPassword" placeholder="New Password"/>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" value={this.state.confirmPassword} onChange={this.handleInputChange}
                       className="form-control" id="confirmPassword" name="confirmPassword"
                       placeholder="Confirm Password"/>
              </div>

              <button type="submit" className="btn btn-primary">Change Password</button>
            </form>

          </div>

        </div>
      </div>


    );

  }

}

ChangePasswordPage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ChangePasswordPage);
