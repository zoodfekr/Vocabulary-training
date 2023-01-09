import axios from 'axios';


//tranclate
export const tranclate = (word) => {

	if (word != null && word.length > 0) {
		return axios.get(`https://translate.googleapis.com/translate_a/single`, {
			params: { client: 'gtx',sl: 'en',tl: 'fa',dt: 't',q: word}
		})
	}

	return new Promise((resolve, reject) => reject([]));


};