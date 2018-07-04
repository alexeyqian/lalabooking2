import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import {Link, Redirect} from 'react-router-dom';

class RegisterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      movies: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    /*
      fetch('/api/v1/movies')
      .then(res => res.json())
      .then(json => this.setState({movies: json.data}));*/
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

    if (!this.state.username || !this.state.password)
      return;

    //this.setState({submitted: true});
    this.props.actions.register({username: this.state.username, password: this.state.password});
    //this.props.history.push('/login');
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/"/>;
    }

    return (
      <div className="row">
        {/*this.state.movies.length &&
          this.state.movies.map(m =>
            <div key={m.name} className="col-md-12">{m.name}</div>
          )
        */}
        <div className="col-md-6 offset-md-3">
          <h1>Register</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={this.state.username} onChange={this.handleInputChange}
                     className="form-control" id="username" name="username" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handleInputChange}
                     className="form-control" id="password" name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" value={this.state.confirmPassword} onChange={this.handleInputChange}
                     className="form-control" id="confirmPassword" name="confirmPassword"
                     placeholder="confirm Password"/>
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-link">Login</Link>
          </form>

        </div>

      </div>
    );
  }

}

RegisterPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
