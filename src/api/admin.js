import axios from '../utils/axios'
class Admins{ 
   List () { 
        let url = '/mall/admin'
        return axios.get(url)
    }
    add({userName,passWord}){
        let url = '/mall/admin'
        return axios.post(url,{userName,passWord})
    }
}
export default new Admins()