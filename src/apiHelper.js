
const API_BASE = 'http://localhost/proep-backend/api/'

export default { 
  
    apiPost(context, data, api_url) {
        let url = API_BASE + api_url;
        let response = context.$http.post(url, data)
        .then(function (response) {
        
        
            return response;
        });

        return response;
    },
    apiGet(context, data, api_url) {
        let url = API_BASE + api_url;
        let response = context.$http.get(url, data)
        .then(function (response) {       
        
            return response;
        });

        return response;
    }
}