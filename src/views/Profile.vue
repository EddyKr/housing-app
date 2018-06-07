<template>
<div class="img"  v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
<b-container style="padding-top: 5%;padding-bottom: 5%;">

<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">    
    <form class="col-10">

        <div class="form-group">
            <div  align="center"> <img alt="User Pic" :src="image2" style="width: 30%;"> </div>
        </div>

        <div class="form-group">
            <div  align="center"> <h3 class="panel-title">Firstname Lastname</h3></div>
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
            <td>Phone number:</td>
            <td>+317860396</td>
            </tr>

            <tr>
            <td>Registration date:</td>
            <td>6/1/2018</td>
            </tr>
            </tbody>
            </table>           
            </div>
        </div>

        <div class="form-group">
            <div  align="center">  
                <b-btn v-b-modal.modal1>Change email</b-btn>
                <b-btn v-b-modal.modal2>Change password</b-btn>
            </div>
        </div>

    </form>   
  </div>
</div>


 <b-modal id="modal1" title="Change your email">
  <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter your new email" v-model="name"></b-form-input>        
      </form>
  </b-modal>

 <b-modal id="modal2" title="Change your password">
  <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter your old password" v-model="name"></b-form-input>
        <b-form-input type="text" placeholder="Enter your new password" v-model="name"></b-form-input>
        <b-form-input type="text" placeholder="Reenter your new password" v-model="name"></b-form-input>                
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
</style>
