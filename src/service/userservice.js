import AxiosService from './axioxsservice';

const obj = new AxiosService();
const baseurl = "http://fundoonotes.incubation.bridgelabz.com/api/"
var url = baseurl.split('/');
const token = localStorage.getItem("token");
const headerconfig = {
    headers: {
    Authorization: token,
    },
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
    addNotes(data){
        let  response  = obj.postMeth(`${baseurl}notes/addNotes`,data, headerconfig);
        return response;
     }

     getAllNotes(data){
        let response = obj.getMethod(`${baseurl}notes/getNotesList`,data, headerconfig);
        return response;
    }
}

export default UserServices