import axios from axios;
const server_url = 'http://localhost:9000';

//tranclate
export const tranclate = (word) => {
	const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&q= ${word}`;
	return axios.get(url);
}
