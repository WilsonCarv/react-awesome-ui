import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types';
import './CheckboxComponent.css';

export const CheckboxComponent = ({text}) => {
  return (
    <Fragment>
      <input type="checkbox" />
        <label>{text}</label>
    </Fragment>
  )
}

PropTypes.CheckboxComponent = {
  text: PropTypes.string.isRequired
}