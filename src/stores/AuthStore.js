import { extendObservable, action, runInAction, computed } from "mobx";
import jwtLib from 'jsonwebtoken';
import Helper from "../helpers/Helper";
import { post, get } from './fetch';

class AuthStore {
	constructor() {
		extendObservable(this, {
			currentUser: null,
			sites: [],
			isUserAuthenticated: computed(() => {
				const token = localStorage.getItem('token');
				if (token == null)
					return false
				else {
					const jwt = jwtLib.decode(token);
					console.log(Date.now() / 1000)
					//this.currentUser !== null &&
					return (token !== null && jwt !== null && jwt.exp > Date.now() / 1000)
				}
			}),
			signout: action((cb) => {
				localStorage.removeItem('token');
				setTimeout(cb, 100)
			}),

			loadSites: action((callback) => {
				this.sites = []
				const url = Helper.URL_getSites(this.currentUser.userId)
				get(url, '')
					.then(json => {
						runInAction(() => {
							this.sites = json
						})
						callback('')
					})
					.catch(err => {
						callback(err.message)
					})
			}),

			login: action((userName, password, callback) => {
				const url = Helper.URL_login()
				post(url, {
					userName,
					password
				}, '').then(json => {
					runInAction(() => {
						this.currentUser = json.user
					})
					localStorage.setItem('token', json.access_token);
					callback(true, '')
				})
					.catch(err => {
						callback(false, err.message)

					})


			}),
		})
	}

}



export default new AuthStore()