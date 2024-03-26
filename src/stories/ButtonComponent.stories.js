import { useRef } from 'react';
import { ButtonComponent } from '../components/Button/ButtonComponent';

export default {
	title: 'ButtonComponent',
	component: ButtonComponent
};
const handleClick = () => {};
const buttonRef = useRef(null);
export const Primary = {
	args: {
		text: 'Primary Button',
		type: 'primary',
		size: 'regular',
		onClick: handleClick,
		ref: buttonRef
	}
};
