<template>

<b-container class="bv-example-row">


    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <b-row>
        <b-col cols="6" md="4"></b-col>
        <b-col cols="6" md="4">	</b-col>
        <b-col cols="6" md="4"></b-col>
    </b-row>
	    <b-row>
        <b-col cols="6" md="4"></b-col>
        <b-col cols="6" md="4">
			
		<h3 class="panel-title">Registration</h3>
			
			    	<form accept-charset="UTF-8" role="form">
                    <fieldset>
                      <div class="form-group">
			    		    <input class="form-control" placeholder="First name" name="lastname" type="text">
			    		</div>
              <div class="form-group">
			    		    <input class="form-control" placeholder="Last name" name="firstname" type="text">
			    		</div>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="E-mail" name="email" type="text">
			    		</div>
              <div class="form-group">
			    		    <input class="form-control" placeholder="Phone nr. (optional)" name="phone" type="text">
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="password" type="password" value="">
			    		</div>
			    	<div class="form-group">
			    			<input class="form-control" placeholder="Repeat Password" name="password" type="password" value="">
			    		</div>
			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Register">
			    	</fieldset>
			      	</form>
					  
					  
					  </b-col>
        <b-col cols="6" md="4"></b-col>
    </b-row>
	 


</b-container>






</template>
<script>
export default {
  
}
</script>


<style>
    #register {

 
    }
</style>

