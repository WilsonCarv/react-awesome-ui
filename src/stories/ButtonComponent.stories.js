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
		fontWeight: 'font-regular'
	}
};
