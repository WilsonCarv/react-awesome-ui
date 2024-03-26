import { ButtonComponent } from '../components/Button/ButtonComponent';

export default {
	title: 'ButtonComponent',
	component: ButtonComponent
};
const handleClick = () => {};
export const Primary = {
	args: {
		text: 'Primary Button',
		type: 'primary',
		onClick: handleClick,
		ref: null,
		fontWeight: 'semi-bold'
	}
};
export const Success = {
	args: {
		text: 'Success Button',
		type: 'success',
		onClick: handleClick,
		ref: null,
		fontWeight: 'bold'
	}
};
export const Danger = {
	args: {
		text: 'Danger Button',
		type: 'danger',
		onClick: handleClick,
		ref: null,
		fontWeight: 'semi-bold'
	}
};
export const Warning = {
	args: {
		text: 'Warning Button',
		type: 'warning',
		onClick: handleClick,
		ref: null,
		fontWeight: 'bold'
	}
};
export const Info = {
	args: {
		text: 'Info Button',
		type: 'info',
		onClick: handleClick,
		ref: null,
		fontWeight: 'bold'
	}
};
