import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
//import {Redirect} from 'react-router-dom';
import UserSideMenu from '../../../components/common/UserSideMenu';

class ProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstname: '',
      lastname: '',
      mobile: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadProfile().then(u => this.setState(
      {
        firstname: u.firstname || '',
        lastname: u.lastname || '',
        mobile: u.mobile || ''
      }
    ));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.actions.updateProfile(this.state);
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-3">
          <UserSideMenu/>
        </div>

        <div className="col-md-9">
          <div>
            <h1>Profile</h1>

            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={this.state.firstname} onChange={this.handleInputChange}
                       className="form-control" id="firstName" name="firstName" placeholder="First Name"/>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" value={this.state.lastname} onChange={this.handleInputChange}
                       className="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" value={this.state.mobile} onChange={this.handleInputChange}
                       className="form-control" id="mobile" name="mobile" placeholder="Mobile"/>
              </div>


              <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>

          </div>
        </div>
      </div>


    );
  }

}

ProfilePage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ProfilePage);
