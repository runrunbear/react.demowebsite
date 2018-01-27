import { extendObservable, action, runInAction, computed } from "mobx";
import jwtLib from 'jsonwebtoken';
import Helper from "../helpers/Helper";
export default extendObservable(this, {
	sites: [],
	currentSite:{},
	loadSites: action((userId, projectId) => {
		this.sites = []
		const url = Helper.URL_getSites(userId)
		return fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': Helper.access_token,
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then(fetch.throwErrors)
			.then(res => res.json())
			.then(json => {
				runInAction(() => {
					this.sites = json;
				})
				return { status: 1 };
			}).catch(err => {
				return { status: 0, message: err.message };
			})
	}),
});

