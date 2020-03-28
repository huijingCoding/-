import axios from '../utils/axios'
class Banner{ 
    bannerList (page=4,pageSize=1) { 
        let url = '/mall/banner?page=4&pageSize=1'
        return axios.get(url,{params:{page,pageSize}})
    }
}
export default new Banner()