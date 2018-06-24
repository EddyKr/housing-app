
const API_BASE = 'http://localhost/proep/proep-backend/api/'

export default { 
  
    apiPost(context, data, api_url) {
        let url = API_BASE + api_url;
      context.$http.post(url, data)
      .then(function (response) {
        
        
        return response;
     })
    },
    apiGet(context, data, api_url) {
        let url = API_BASE + api_url;
        context.$http.get(url, data)
        .then(function (response) {       
        
        return response;
     })
    }
}