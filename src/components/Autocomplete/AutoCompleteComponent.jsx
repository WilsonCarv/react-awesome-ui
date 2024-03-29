import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './AutoCompleteComponent.css';

export const AutoCompleteComponent = ({ options, label, onValueChange }) => {
	const [value, setValue] = useState('');
	const [open, setOpen] = useState(false);
	const [filteredOptions, setFilteredOptions] = useState([]);

	const filterOptions = () => {
		const filtered = options.filter(option =>
			option.label.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredOptions(filtered.sort());
	};

	const handleInputChange = e => {
		const { value } = e.target;
		setValue(value);
		if (value === '') {
			setFilteredOptions(options);
		} else {
			filterOptions();
		}
		setOpen(true);
	};

	const handleOptionClick = option => {
		setValue(option.label);
		onValueChange(option);
		setFilteredOptions(options.filter(opt => opt.id !== option.id));
		setOpen(false);
	};

	const handleBlur = () => {
		setTimeout(() => {
			setOpen(false);
		}, 100);
	};

	const handleFocus = () => {
		setOpen(true);
		if (value === '') {
			setFilteredOptions(options);
		} else {
			filterOptions();
		}
	};

	return (
		<Fragment>
			<input
				type="text"
				placeholder={label}
				onChange={handleInputChange}
				onFocus={handleFocus}
				value={value}
				onBlur={handleBlur}
                className='aw-autocomplete-input'
			/>
			{open && (
				<ul className="aw-autocomplete-list">
					{filteredOptions.sort((a,b)=> a.label.localeCompare(b.label)).map(option => (
						<li key={option.id} onClick={() => handleOptionClick(option)}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</Fragment>
	);
};

AutoCompleteComponent.propTypes = {
	options: PropTypes.array.isRequired,
	label: PropTypes.string.isRequired,
	getSelectedValue: PropTypes.func
};

