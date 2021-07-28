import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Router from './Router';
import Navbar from './Navbar';

const items = [
	{
		title: 'What\'s React?',
		content: 'React is a frontend Javascript framework.'
	},
	{
		title: 'Why use React?',
		content: 'React is a favourite Javascript library among engineers.'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating Components.'
	},
];

const options = [
	{
		label: 'A shade of Blue',
		value: 'blue'
	},
	{
		label: 'The color Red',
		value: 'red'
	},
	{
		label: 'The color Green',
		value: 'green'
	},
	{
		label: 'The color Yellow',
		value: 'yellow'
	}
];

const App = props => {
	const [selected, setSelected] = useState(options[0]);

	return(
		<div className="ui container" style={{ marginTop: '50px' }}>
			<Navbar />
			<Router path="/">
				<Accordion items={items} />
			</Router>
			<Router path="/list">
				<Search />
			</Router>
			<Router path="/dropdown">
				<Dropdown selected={selected} onSelectedChange={setSelected} options={options} itemName="color" />
			</Router>
			<Router path="/translate">
				<Translate />
			</Router>
		</div>
	);
};

export default App;