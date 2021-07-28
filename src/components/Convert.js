import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({ text, langauge }) => {
	const [translated, setTranslated] = useState('');
	const [debounceTerm, setDebounceTerm] = useState(text);

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setDebounceTerm(text);
		}, 500);

		return () => {
			clearTimeout(timeoutID);
		};
	}, [text]);

	useEffect(() => {
		const makeTranslation = async () => {
			const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
				params: {
					q: debounceTerm,
					target: langauge.value,
					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
				}
			});
			setTranslated(data.data.translations[0].translatedText);
		};
		makeTranslation();
	}, [langauge, debounceTerm]);

  return(
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;