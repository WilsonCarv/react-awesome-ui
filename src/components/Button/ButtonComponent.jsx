import React from 'react';
import { PropTypes } from 'prop-types';
import './ButtonComponent.css';

export const ButtonComponent = ({ text, type, onClick, ref, fontWeight }) => {
	const classes = `button ${type} ${fontWeight}`;
	return (
		<button className={classes} onClick={onClick} ref={ref}>
			{text}
		</button>
	);
};

PropTypes.ButtonComponent = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	onClick: PropTypes.func,
	ref: PropTypes.func,
	fontWeight: PropTypes.string
};
