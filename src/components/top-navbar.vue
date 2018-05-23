<template>
      
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">Your Housing</b-navbar-brand>


  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#"></b-nav-item>
      <b-nav-item href="#" disabled></b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-form>
           <li><router-link to="Login" tag="b-button" style="margin-right:5px;">LogIn</router-link></li>
           <li><router-link to="Register" tag="b-button">Register</router-link></li>        
      </b-nav-form>
    
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
     


</template>
<script>
export default {
  
}

</script>

<style>
.navbar{
       background: #00000000  !important;   
}


body {
    background-color: DarkSlateGray   ;
}

</style>


