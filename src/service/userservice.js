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
        let response = obj.getMethod(`${baseurl}notes/getNotesList`,headerconfig);
        return response;
    }

    changeColor(data){
        let response = obj.postMeth(`${baseurl}notes/changesColorNotes`, data, headerconfig);
        return response;
    }
    
    archiveNotes(data){
        let response = obj.postMeth(`${baseurl}notes/archiveNotes`, data, headerconfig);
        return response;
    }

    deleteNotes(data){
        let response = obj.postMeth(`${baseurl}notes/trashNotes`, data, headerconfig);
        return response;
    }
    updateNotes(data){
        let response = obj.postMeth(`${baseurl}notes/updateNotes`, data, headerconfig);
        return response;
    }
    getArchiveNotes(){
        let response = obj.getMethod(`${baseurl}notes/getArchiveNotesList`, headerconfig);
        return response;
    }
    getTrashNotes(){
        let response = obj.getMethod(`${baseurl}notes/getTrashNotesList`, headerconfig);
        return response;
    }
    signOut(data){
        let response = obj.postMeth(`${baseurl}user/logout`, {}, headerconfig);
        return response;
    }
    searchCollaborator(data) 
    {
        let response = obj.postMeth(`${baseurl}user/searchUserList`,data, headerconfig);
        return response;
    }

    addCollab(data,noteId) 
    {

        let response = obj.postMeth(`${baseurl}notes/` +noteId+ `/AddcollaboratorsNotes`,data ,headerconfig);
        return response;
        
        
    }
}

export default UserServices