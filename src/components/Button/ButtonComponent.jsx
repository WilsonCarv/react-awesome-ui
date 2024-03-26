import React from 'react';
import { PropTypes } from 'prop-types';
import './ButtonComponent.css';

export const ButtonComponent = ({ text, type, onClick, ref, size }) => {
	return (
		<button className={`button ${type}${size}`} onClick={onClick} ref={ref}>
			{text}
		</button>
	);
};

PropTypes.ButtonComponent = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	onClick: PropTypes.func,
	ref: PropTypes.func
};
