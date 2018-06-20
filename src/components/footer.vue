<template>                     
    <div class="footer-wrap">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <h3 class="text-center">ABOUT Your Housing</h3>
                    <div class="footer-logo text-center"><img src="../assets/housingICON.png" style="height: 100px;"></div>
                    <p>YourHousing is a project started by young uprising proffesionals from The Netherlands. At the time of project creations all team members were still students.
                    Our main goal is to provide best possible freemium solution without 3rd parties for accommodation in The Netherlands. </p>
                </div>
                <div class="col-md-2 col-sm-2 text-center">
                    <h3>Quick  Links</h3>
                    <ul class="footer-links text-center">
                        <li><a><router-link to="/">Home</router-link></a></li>
                        <li><a><router-link to="">Search</router-link></a></li>
                        <li><a><router-link to="register">Registration</router-link></a></li>
                        <li><a><router-link to="login">LogIn</router-link></a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-3 text-center">
                    <h3>Social Media</h3>
                    <ul class="footer-category">
                        <li><a target="_blank" href="https://www.Facebook.com/">Facebook</a></li>
                        <li><a target="_blank" href="https://www.Twitter.com/">Twitter</a></li>
                        <li><a target="_blank" href="https://www.Instagram.com/">Instagram</a></li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="col-md-3 col-sm-3 text-center">
                    <h3>Contact Us</h3>
                    <div class="info"><i aria-hidden="true"></i> <a>Eindhoven 5611, Rachelsmolen 1</a></div>
                    <div class="info"><i aria-hidden="true"></i> <a>(777) 123 4567</a></div>
                    <div class="info"><i aria-hidden="true"></i> <a>(123) 456 7890</a></div>
                </div>
            </div>
            <div class="copyright">Copyright © 2017 YourHousing - All Rights Reserved.</div>
        </div>
    </div>
</template>

<script>
  export default { 
  }
</script>

<style scoped>
    .footer-wrap {
        padding-top: 30px;
        background-size: cover;
    }

    .footer-wrap h3 {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .footer-wrap p {
        font-size: 14px;
        line-height: 24px;
        color: #b3b3b3;
        margin-top: 15px;
    }

    .footer-wrap p a {
        color: #fff;
        text-decoration: underline;
        font-style: italic;
    }

    .footer-links li a {
        font-size: 14px;
        line-height: 26px;
        color: #b3b3b3;
    }

    .footer-links li {
        list-style-type: none;
        margin-right: 25%;
    }

    .footer-category li {
        list-style-type: none;
        margin-right: 20%;
    }

    .footer-category li a {
        font-size: 14px;
        line-height: 26px;
        color: #b3b3b3;
    }

    .info a {
        color: #b3b3b3;
        font-size: 14px;
        line-height: 30px;
        font-weight: normal;
    }
    
    .copyright {
        border-top: 1px solid #5f5f5f;
        font-size: 14px;
        color: #b3b3b3;
        margin-top: 25px;
        padding-top: 10px;
        text-align: center;
        padding-bottom: 10px;
    }
</style>
