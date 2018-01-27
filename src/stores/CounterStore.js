import { extendObservable, action, runInAction } from "mobx";
import Helper from "../helpers/Helper";
export default new extendObservable(this, {
	userId: 14,
	count: 0,
	sites: [],
	increment: action(() => {
		this.count += 1;
	}),
	decrement: action(() => {
		this.count -= 1;
	}),
	fetch: action(() => {
		this.sites = []
		const url = Helper.URL_getSites(this.userId)
		fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				/*'Authorization': 'Bearer ' + token,*/
			},
		}).then(
			response => {
				if (response.ok) {
					response.json().then(json => {
						runInAction(() => {
							this.sites = json
							this.state = "done"
						})
					});
				}
			},
			error => {
				// the alternative ending of this process:...
				runInAction(() => {
					this.state = "error"
				})
			}
			)
	}),
});