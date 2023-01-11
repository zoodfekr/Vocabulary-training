
import axios from "axios";


// tranclate - googleAPI
export const tranclate = (word) => {

	if (word != null) {
		return axios.get(`https://translate.googleapis.com/translate_a/single`, {
			params: {
				client: 'gtx',
				sl: 'en',
				tl: 'fa',
				dt: 't',
				q: word
			}
		})
	}
	return new Promise((resolve, reject) => reject([]));
};

//local server
// return all words

export const dbwords = () => {
	return axios.get(`http://localhost:9000/words`);
}

// // return word
// export const word = (id) => {
// 	return axios.get(`localhost:9000/words/${id}`)

// }

// post new word
export const createword = (data) => {
	const url = `http://localhost:9000/words`;
	return axios.post(url, data);
};


// // delete word
// export const del = (id) => {
// 	return axios.delete(`localhost:9000/words/${id}`)
// }

// // update word
// export const update = (id) => {
// 	return axios.put(`localhost:9000/words/${id}`)
// }