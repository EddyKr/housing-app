import router from '@/router'

const API_URL = 'http://http://localhost/proep/proep-backend/api/'
const LOGIN_URL = API_URL + 'users/token/'
const SIGNUP_URL = API_URL + 'register'

export default {
    user: {
        authenticated: false
      },
    
  
    login(context, creds, redirect) {
      context.$http.post(LOGIN_URL, creds)
      .then(function (response) {
          console.log(response);
        localStorage.setItem('id_token', response.data.data.token)  

        if(redirect) {
          router.redirect(redirect)       
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
    },
  
    checkAuth() {
      var jwt = localStorage.getItem('id_token')
      if(jwt) {
        this.user.authenticated = true
      }
      else {
        this.user.authenticated = false      
      }
    },
  
  
    getAuthHeader() {
      return {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      }
    }
  }