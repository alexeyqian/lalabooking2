import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';

const OrderCustomerForm = ({customer, onChange, onSubmit, errors}) => {

  return (
    <form>
      <TextInput
        name="firstName"
        label="First Name"
        value={customer.firstName}
        onChange={onChange}
        error={errors.lastName}/>

      <TextInput
        name="lastName"
        label="Last Name"
        value={customer.lastName}
        onChange={onChange}
        error={errors.lastName}/>

      <TextInput
        name="mobile"
        label="Mobile"
        value={customer.mobile}
        onChange={onChange}
        error={errors.mobile}/>

      <TextInput
        name="email"
        label="Email"
        value={customer.email}
        onChange={onChange}
        error={errors.email}/>

      <button className="btn btn-primary" onClick={onSubmit}>Submit Order</button>
    </form>
  );
};

OrderCustomerForm.propTypes = {
  customer: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default OrderCustomerForm;
