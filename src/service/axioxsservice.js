import axios from "axios";

class AxiosService {
    postMeth(url, data, header=false) {
        return axios.post(url, data, header);
    }
}

export default AxiosService;