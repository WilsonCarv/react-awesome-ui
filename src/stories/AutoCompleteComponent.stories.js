import { AutoCompleteComponent } from '../components/Autocomplete/AutoCompleteComponent';

export default {
	title: 'AutoCompleteComponent',
	component: AutoCompleteComponent
};
const onValueChange = option => {
	console.log(option);
};
export const Default = {
	args: {
		options: [
			{ id: 1, label: 'BWM' },
			{ id: 2, label: 'Audi' },
			{ id: 3, label: 'Ferrari' },
			{ id: 4, label: 'Lamborghini' },
			{ id: 5, label: 'Porsche' },
			{ id: 6, label: 'Mercedes' },
			{ id: 7, label: 'Toyota' },
			{ id: 8, label: 'Honda' },
			{ id: 9, label: 'Ford' },
			{ id: 10, label: 'Chevrolet' },
			{ id: 11, label: 'Nissan' },
			{ id: 12, label: 'Mazda' },
			{ id: 13, label: 'Subaru' },
			{ id: 14, label: 'Volkswagen' }
		],
		label: 'Select an option',
		onValueChange: onValueChange
	}
};
