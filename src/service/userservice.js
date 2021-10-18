import AxiosService from './axioxsservice';

const obj = new AxiosService();
const baseurl = "http://fundoonotes.incubation.bridgelabz.com/api/"
var url = baseurl.split('/');
const token = localStorage.getItem("token");
const headerconfig = {
    header: {
    Authorization: {token},
    }
};


class UserServices {
    signup(data) {
        let response = obj.postMeth(`${baseurl}user/userSignUp`, data);
        return response;
    }
    signin(data) {
        let response = obj.postMeth(`${baseurl}user/login`, data);
        return response;
    }
    forgot(data) {
        let response = obj.postMeth(`${baseurl}user/reset`, data);
        return response;
    }
    reset(data) {
        let response = obj.postMeth(`${baseurl}user/reset-password`, data, headerconfig);
        return response;
    }
}

export default UserServices