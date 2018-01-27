/**
 * Simple wrapper around fetch that rejects on anything but a succesful json response
 */
export function simpleFetch(url) {
	return new Promise((resolve, reject) => {
		window.fetch(url)
			.then(res => {
				if (res.ok) {
					res.json().then(resolve).catch(reject)
				} else {
					reject(res)
				}
			})
			.catch(reject)
	});
}

export function post(url, data, token) {
	return new Promise((resolve, reject) => {
		window.fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token,
			}
		})
			.then(res => {
				if (res.ok) {
					res.json().then(resolve).catch(reject)
				} else {
					reject(res)
				}
			})
			.catch(reject)
	});
}

export function get(url, token) {
	return new Promise((resolve, reject) => {
		window.fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token,
			}
		})
			.then(res => {
				if (res.ok) {
					res.json().then(resolve).catch(reject)
				} else {
					reject(res)
				}
			})
			.catch(reject)
	});
}