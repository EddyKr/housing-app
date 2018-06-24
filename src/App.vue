<template>
    <div id="app">
        <top-nav-bar v-bind:loggedIn="logged"/>
        <router-view/>
        <my-footer/>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import TopNavBar from '@/components/top-navbar.vue'
    import MyFooter from '@/components/footer.vue'
    import auth from '@/auth.js'

    export default {
        components:{
            TopNavBar,
            MyFooter
        },
        data() {
            return {
                logged : auth.checkAuth()
            }
        },
        updated() {
            this.logged = auth.checkAuth();
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;       
        background: darkslategray;      
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    
    #nav a.router-link-exact-active {
        color: #42b983;
    }  
</style>
