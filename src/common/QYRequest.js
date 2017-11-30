/**
 * Created by kerwinliu on 2017/11/9.
 */
/*网络请求
 */
'use strict'
//生产测试域名
let domains = {
    'pro' : 'https://m.iqiyi.com'
}

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

//组织参数
const requestParams =  (data) =>{
    let new_arr = []
    for(var key in data){
        new_arr.push(`${key}=${data[key]}`)
    }
    return new_arr.join("&")
}

let mockFlag = false
//版本号
const ver = '1.0.0'


const request = (url,params,options) =>{
    console.log(url,params)
    return fetch(url,params)
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                return data
            })
            .catch((error)=>{
                console.log(error)
                return {...error}
            })
}

const checkMock = (url,postData) =>{
    // 只有开发环境才有mock一说~
    if(__DEV__) {
        // mock模式发送请求到 mock server
        if(mockFlag) {
            const mockUrl = `http://localhost:3000/mock/${url}`;
            return request(mockUrl,postData).then((response) => {
                return response;
            });
        }
    }
    let env = 'pro';
    return request(`${domains[env]}/${url}`,postData)
}

export default{
    post({url,params,options}){
        params.ver = ver
        let postData =  {
            ...options,
            method: 'POST',
            headers: {
                ...defaultHeaders
            },
            body: JSON.stringify(params || '')
        };
        return checkMock(url,postData)
    },
    get({url, params, options}){
        if(params){
            params.ver = ver;//版本号
            let _param_ = requestParams(params);
            url = url +'?'+_param_ ;
        }else{
            url = url +'?ver='+ver;
        }
        let postData =  {
            ...options,
            method: 'GET',
            headers: {
                ...defaultHeaders
            }
        };
        return checkMock(url,postData)
    },
    setMockFlag(state){
        mockFlag = state
    }
}