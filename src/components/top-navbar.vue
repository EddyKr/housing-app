<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">YourHousing</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav v-if="loggedIn">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/search">Search</b-nav-item>
            <b-nav-item href="/appointment">Appointments</b-nav-item>
            <b-nav-item href="/dashboard">My offers</b-nav-item>
        </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form v-if="!loggedIn">
          <li><router-link to="Login" tag="b-button" style="margin-right:5px;">LogIn</router-link></li>
          <li><router-link to="Register" tag="b-button">Register</router-link></li>                  
        </b-nav-form>
        <b-nav-form v-else>
            <li><router-link to="/profile" tag="b-button" style="margin-right:5px;">My profile</router-link></li>
            <li><b-btn @click="logout()">Logout</b-btn></li>        
        </b-nav-form>    
      </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>     
</template>

<script>
    import auth from '@/auth.js'

export default {  
  props: ['loggedIn'],
  methods: {
    logout:function() {
      auth.logout();
    }
  }
}
</script>

<style>
.navbar{
    background: darkslategray !important;
}
body {
    background-color: DarkSlateGray   ;
}
</style>


