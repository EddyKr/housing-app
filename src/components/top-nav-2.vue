<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">YourHousing</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item href="/dashboard">Home</b-nav-item>
            <b-nav-item href="/search">Search</b-nav-item>
            <b-nav-item href="/dashboard">Appointments</b-nav-item>
            <b-nav-item href="/dashboard">Test</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <li><router-link to="/profile" tag="b-button" style="margin-right:5px;">My profile</router-link></li>
            <li><router-link to="/" tag="b-button">Logout</router-link></li>        
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
        background: darkslategray !important;
    }
</style>
