<template>
    <div class="img"  v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <b-container style="padding-top: 5%;padding-bottom: 5%;">
            <div class="container h-100">
                <div class="row h-100 justify-content-center align-items-center">    
                    <form class="col-10 text-center">
                        <div class="form-group">
                            <div  align="center"> <img alt="User Pic" :src="image2" style="width: 30%;"> </div>
                        </div>
                        <div class="form-group">
                            <div  align="center"> <h3 class="panel-title myt">Firstname Lastname</h3></div>
                        </div>
                        <div class="form-group">
                            <div  align="center">      
                                <table class="table table-dark">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>user@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Registration date:</td>
                                            <td>6/1/2018</td>
                                        </tr>
                                    </tbody>
                                </table>           
                            </div>
                        </div> <!--form-group-->
                        <div class="form-group">
                            <div  align="center">  
                                <b-btn id="btnS" style="margin-top:1%;" v-b-modal.changeEmail>Change email</b-btn>
                                <b-btn id="btnS" style="margin-left: 1%; margin-top:1%;" v-b-modal.changePass>Change password</b-btn>
                            </div>
                        </div>
                    </form>   
                </div>
            </div><!--container h-100-->
           
            <b-modal id="changeEmail" title="Change your email">
                <form @submit.stop.prevent="handleSubmit">
                    <b-form-input type="text" placeholder="Enter your new email" v-model="name"></b-form-input>        
                </form>
            </b-modal>
           
            <b-modal id="changePass" title="Change your password">
                <form @submit.stop.prevent="handleSubmit">
                   <div class="form-group"><b-form-input type="text" placeholder="Enter your old password" v-model="name"></b-form-input></div>
                   <div class="form-group"><b-form-input type="text" placeholder="Enter your new password" v-model="name"></b-form-input></div>
                   <div class="form-group"><b-form-input type="text" placeholder="Reenter your new password" v-model="name"></b-form-input></div>             
                </form>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
export default {   
    data(){
        return {
            image:require('../assets/bkgt.jpg'),
            image2:require('../assets/profile.png')
        }
    } 
}
</script>

<style scoped>
    .table td {
        text-align: center;   
    }

    .myt{
        color: whitesmoke;
    }

    #btnS{
        width: 150px;
    } 
</style>
