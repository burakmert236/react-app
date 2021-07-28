import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	},
	{
		label: 'Dutch',
		value: 'nl'
	},
	{
		label: 'Turkish',
		value: 'tr'
	}
];

const Translate = props => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');

  return(
		<div>
			<div className="ui form" style={{ marginBottom: '30px' }}>
				<div className="field">
					<label>Enter text</label>
					<input value={text} onChange={ e => setText(e.target.value) } />
				</div>
			</div>
			<Dropdown selected={language} onSelectedChange={setLanguage} options={options} itemName="Language"/>
			<hr style={{ marginTop: '20px' }}/>
			<h3 className="ui header">Output</h3>
			<Convert text={text} langauge={language}/>
		</div>
	);
};

export default Translate;