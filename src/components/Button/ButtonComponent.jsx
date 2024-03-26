import React from 'react'
import { PropTypes } from 'prop-types';
import './ButtonComponent.css';

export const ButtonComponent = ({text}) => {
  return (
    <button>{text}</button>
  )
}

PropTypes.ButtonComponent = {
  text: PropTypes.string.isRequired
}