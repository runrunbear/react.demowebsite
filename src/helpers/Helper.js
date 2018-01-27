class Helper {
    constructor() {
        this.APP_NAME = 'demo';
        this.OFFLINEMODE = false;
        this.DOCUMENTPATH = '';
        //this.URL = 'http://localhost:8080/api/demo/';
        this.URL = 'http://ec2-52-53-219-161.us-west-1.compute.amazonaws.com:8080/api/demo/';
        this.Default_Lat = '33.333';
        this.Default_Lng = '-117.13'
        this.access_token = '';
        this.refresh_token = '';
        this.token_expires_in = 1799;
        this.token_expires = new Date();
        this.STORAGE_KEY = 'id_token';
        this.STORAGE_STORE = 'site';
        this.userName = '';
        this.userId = 0;
        this.photo = '';
    }
    URL_login = () => this.URL  + 'login';
    URL_renewToken = () => this.URL + "/user/renewToken";
    URL_saveSite = () => this.URL  + 'saveSite';

    URL_getSite = (userId, siteId) => this.URL  + `user/${userId}/site/${siteId}`
    URL_getSites = (userId) => this.URL  + `user/${userId}/sites`
    URL_getReport = (reportId) => this.URL  + `report/${reportId}`
    URL_deleteSite = (userId, siteId) => this.URL  + `user/${userId}/site/${siteId}/delete`
    URL_lostPassword = () => this.URL  + `user/lostpassword`
    URL_changePassword = () => this.URL  + `user/changepassword`

    URL_register = () => this.URL  + `user/register`
    URL_deletePhoto = (userId, siteId) => this.URL  + `user/${userId}/site/${siteId}/deletephoto`
    URL_uploadPhotos = (userId, siteId) => this.URL  + `user/${userId}/site/${siteId}/upload`
    convertFromIsoDate(isoDate){
        if (isoDate == null) {
            return ''
        }
        //return new Date(isoDate).toLocaleDateString()
        var t = isoDate.split(/[- :]/);
        var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString()
    }

    decodeString(str) {
		return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
			var num = parseInt(numStr, 10);
			return String.fromCharCode(num);
		});
    }

    _generateUUID() {
		var d = new Date().getTime();
		var r = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
		var uuid = this.userId + '_' + d + '_' + r;
		return uuid;

    };

    dateStringForMySQL(d){
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

}

export default (new Helper());
