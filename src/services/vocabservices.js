import axios from "axios";


// tranclate
export const tranclate = (word) => {
	const data = axios.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&q=word');
	return data;
	// var config = {
	// 	method: 'get',
	// 	url: 'https://translate.googleapis.com/translate_a/single?',
	// 	headers: {},
	// 	params: {
	// 		client: "gtx",
	// 		sl: "en",
	// 		tl: "fa",
	// 		dt: "t",
	// 		q: word
	// 	}
	// };

	// return axios(config)
	// 	.then((response) => { console.log(JSON.stringify(response.data)); })
	// 	.catch((error) => { console.log(error); });
	// return data

}

// var axios = require('axios');


