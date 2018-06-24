import router from '@/router'

const API_URL = 'http://localhost/proep/proep-backend/api/'
const LOGIN_URL = API_URL + 'token'
const SIGNUP_URL = API_URL + 'register'

export default { 
  
    login(context, creds, redirect) {
      console.log(creds);
      context.$http.post(LOGIN_URL, creds)
      .then(function (response) {
        localStorage.setItem('id_token', response.data.data.token)  

        if(redirect) {
          router.push(redirect) 
          location.reload();      
        }
     })
    },
  
    signup(context, creds, redirect) {
      context.$http.post(SIGNUP_URL, creds)
      .then(function (response) {
            let data = response.data
            localStorage.setItem('id_token', data.token)  
            
            if(redirect) {
                router.redirect(redirect)        
            }  
      })
    },
  
    logout() {
      localStorage.removeItem('id_token')
      location.reload();
      router.push('/')   
         
    },
  
    checkAuth() {
      var jwt = localStorage.getItem('id_token')
      if(jwt) {
        return true
      }
      else {
        return false      
      }
    },
  
  
    getAuthHeader() {
      return {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      }
    }
  }