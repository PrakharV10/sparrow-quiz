import axios from 'axios';

export async function serverCallHandler(method: string, route: string, data?: {}) {
	switch (method) {
		case 'GET':
			try {
				const res = await axios.get(route);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'POST':
			try {
				const res = await axios.post(route, data);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'PUT':
			try {
				const res = await axios.put(route, data);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'DELETE':
			try {
				const res = await axios.delete(route, data);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		default:
			return { response: 'Invalid method type', success: false };
	}
}

export function setupAuthHeaderForServiceCalls(token: string) {
	if (token) {
		return (axios.defaults.headers.common['Authorization'] = token);
	}
	delete axios.defaults.headers.common['Authorization'];
}
