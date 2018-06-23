<template>
    <div id="app">
        <router-view/>
        <my-footer/>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import TopNavBar from '@/components/top-navbar.vue'
    import MyFooter from '@/components/footer.vue'

    export default {
        components:{
            TopNavBar,
            MyFooter
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
